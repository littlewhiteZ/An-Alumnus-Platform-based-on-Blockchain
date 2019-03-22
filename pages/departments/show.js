import React, {Component} from 'react';
import {Card, Grid, Button, Table} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Department from '../../ethereum/department';
import web3 from '../../ethereum/web3';
//import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import RequestRow from '../../components/RequestRow';
import ipfs from '../../utils/ipfs';

class CampaignShow extends Component {

    state = {
        item: null
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
        const posts = await Promise.all(
            Array(parseInt(count)).fill().map((element, index) => {
                return department.methods.posts(index).call()
            })
        );
        return{
            address: props.query.address,
            departmentName: summary[0],
            personCount: count,
            manager: summary[2],
            persons: persons,
            posts: posts
        };
    }

    async componentDidMount() {
        await this.setPostitems();

    }

    setPostitems = async () => {
        let items = [];
   
        for (const post of this.props.posts) {
            const descriptionHTML = await ipfs.cat(post.hash);
            items.push({
            header: "公告",
            description: (
                <div
                dangerouslySetInnerHTML={{ __html: descriptionHTML.toString() }}
                />
            ),
            fluid: true,
            extra: <span>{post.time}</span>,
            style: { overflowX: 'scroll' }
            });
        }
        console.log('items', items);
        this.setState({items});
    }

    renderPost(){

        return <Card.Group items={this.state.items} />;
    }

    renderRow(){
        return this.props.persons.map((person, index)=>{
            return( 
                <RequestRow 
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
                        <Grid.Column>
                            {this.renderPost()}
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