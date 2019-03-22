import React, {Component} from 'react';
import {Card, Grid, Button, Table, Input} from 'semantic-ui-react';
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
        id_level: 1,
        name_level: 1,
        job_level: 1,
        media_level: 1,
        email_level: 1,
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

    handleChange = e => this.setState({ idlevel: e.target.value });

    renderRow(){
        return this.props.persons.map((person, index)=>{
            return( 
                <ManageRow 
                    id={index}
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
                header: departmentName,
                meta: '系級',
                description: '哪一年哪一級'
            },
            {
                header: personCount,
                meta: 'Number of person',
                description: '有多少人'
            },
            {
                extra: (
                    <div>
                        <div>學號 Level: {this.state.id_level}</div>
                        <input type='range' min={1} max={5} value={this.state.id_level} onChange={event=>this.setState({ id_level: event.target.value })} />
                        <div color="blue">名字 Level: {this.state.name_level}</div>
                        <input type='range' min={1} max={5} value={this.state.name_level} onChange={event=>this.setState({ name_level: event.target.value })} />
                        <div>職稱 Level: {this.state.job_level}</div>
                        <input type='range' min={1} max={5} value={this.state.job_level} onChange={event=>this.setState({ job_level: event.target.value })} />
                        <Button primary floated="right">change</Button>
                        <div>社群媒體 Level: {this.state.media_level}</div>
                        <input type='range' min={1} max={5} value={this.state.media_level} onChange={event=>this.setState({ media_level: event.target.value })} />
                        <div>email Level: {this.state.email_level}</div>
                        <input type='range' min={1} max={5} value={this.state.email_level} onChange={event=>this.setState({ email_level: event.target.value })} />
                        
                    </div>
                )
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
                        <Grid.Column >
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