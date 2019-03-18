import React, {Component} from 'react';
import {Card, Grid, Button, Table} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Department from '../../ethereum/department';
import web3 from '../../ethereum/web3';
//import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import ManageRow from '../../components/ManageRow';
import Editor from '../../components/Editor';
import ipfs from '../../utils/ipfs';

class CampaignShow extends Component {

    state={
        posthtml: '',
        post: '',
        errorMessage: '',
        errorvisible: true,
        loading: false
    };
    static async getInitialProps(props){
        const department = Department(props.query.address);

        const summary = await department.methods.getSummary().call();
        const count = await department.methods.getPersonCount().call();
        const persons = await Promise.all(
            Array(parseInt(count)).fill().map((element, index) => {
                return department.methods.persons(index).call()
            })
        );

        return{
            address: props.query.address,
            departmentName: summary[0],
            personCount: count,
            manager: summary[2],
            persons: persons
        };
    }

    onHTMLChange = html => {
        this.setState({ posthtml: html.toHTML() });
        console.log(this.state.posthtml.toString());
    };

    getipfsHash = async () => {
        try{
             // convert html to buffer
            const buffer = await Buffer.from(this.state.posthtml.toString());
            console.log(this.state.posthtml.toString());
            // add file to ipfs
            const ipfsResult = await ipfs.add(buffer);
            const contentHash = ipfsResult[0].hash;
            console.log('ya');
            console.log(contentHash);
            this.setState({post: contentHash});
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
    }

    addPost = async (event)=> {
        event.preventDefault();
        await this.getipfsHash();
        const department = Department(this.props.address);
    
        const {post} = this.state;
        var today=new Date();

        var currentDateTime =
        today.getFullYear()+'年'+
        (today.getMonth()+1)+'月'+
        today.getDate()+'日('+
        today.getHours()+':'+today.getMinutes()+')';
        console.log(currentDateTime);
        this.setState({loading:true,errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            //await department.methods
              //  .createPost(post,currentDateTime)
                //.send({from: accounts[0]});

            //Router.pushRoute("/manage/index");
        } catch (err) {
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false});
        
    };



    renderRow(){
        return this.props.persons.map((person, index)=>{
            return( 
                <ManageRow 
                    key={index}
                    person={person}
                    address={this.props.address}
            />
            );
        });      
    }

    renderCards() {

        const {
            manager,
            departmentName,
            personCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Mnager',
                description: 'the manager create this and can create request',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: departmentName,
                meta: '系級',
                description: '哪一年哪一級'
            },
            {
                header: personCount,
                meta: 'Number of person',
                description: '有多少人'
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        const {Header, Row,HeaderCell, Body}= Table;

        return (
            <Layout>
                <h3>Department Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={15}>
                            {this.renderCards()}
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column width={13}>
                            <Editor onChange = {this.onHTMLChange}/>
                        </Grid.Column>

                        <Grid.Column>
                            <Button onClick={this.addPost} loading={this.state.loading} content=" 新增公告" icon="add circle" primary/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/departments/${this.props.address}/persons/new`}>
                                <a>
                                    <Button primary>New Person!</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>學號</HeaderCell>
                            <HeaderCell>名字</HeaderCell>
                            <HeaderCell>職稱</HeaderCell>
                            <HeaderCell>社群媒體</HeaderCell>
                            <HeaderCell>Email</HeaderCell>
                            <HeaderCell>Update</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Reject</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
            </Layout>
        );
    }
}

export default CampaignShow;