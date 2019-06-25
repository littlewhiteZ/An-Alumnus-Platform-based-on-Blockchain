import React, {Component} from 'react';
import {Card, Grid, Button, Table, Dimmer, Loader, Input, CardContent, Label,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Department from '../../ethereum/department';
import web3 from '../../ethereum/web3';
//import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import RequestRow from '../../components/RequestRow';
import ipfs from '../../utils/ipfs';
import {Router} from '../../routes';
import measure from '../../utils/measure';

class CampaignShow extends Component {

    state = {
        item: null,
        value: '',
        departmentName: '',
        personCount: 0,
        manager: '',
        persons: [],
        posts: [],
        balance: 0,
        id_level: 0,
        name_level: 0,
        job_level: 0,
        media_level: 0,
        email_level: 0,


        errorMessage: '',
        errorvisible: true,
        refreshing: true,
        loading: false
    };

    static async getInitialProps(props){
        
        return {address: props.query.address};
    }

    async componentDidMount() {

        const department = Department(this.props.address);

        const summary = await measure('get Department Summary', async () => {
            return await department.methods.getSummary().call();
        });
        
        const persons = await Promise.all(
            Array(parseInt(summary[7])).fill().map((element, index) => {
                return department.methods.persons(index).call()
            })
        );
        const posts = await Promise.all(
            Array(parseInt(summary[8])).fill().map((element, index) => {
                return department.methods.posts(index).call()
            })
        );

        this.setState({
            departmentName: summary[0],
            personCount: summary[7],
            manager: summary[9],
            persons: persons,
            posts: posts,
            balance: web3.utils.fromWei(summary[1],'ether'),
            id_level: summary[2],
            name_level: summary[3],
            job_level: summary[4],
            media_level: summary[5],
            email_level: summary[6]
        });
        this.setPostitems();
        
    }

    setPostitems = async () => {
        let items = [];
        await measure('get all posts content from IPFS', async () => {
            for (const post of this.state.posts) {
                console.log(post.hash);
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
        });

        console.log('items', items);
        this.setState({items,refreshing:false});
    }

    Contribute = async (event) => {
        console.log("ya");
        event.preventDefault();

        const department = Department(this.props.address);

        this.setState({ loading: true, errorMessage: '' });
        
        try {
            const accounts = await web3.eth.getAccounts();

            await measure('contribute!',async ()=>{
                await department.methods.contribute().send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether')
                });
            });
            
            Router.pushRoute(`/departments/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ errorvisible: false});
        }

        this.setState({ loading: false, value: '' });
    }

    renderPost(){

        return <Card.Group items={this.state.items} />;
    }

    renderRow(){
        return this.state.persons.map((person, index)=>{
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
        } = this.state;


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

        return <Card.Group items={items} itemsPerRow={3}/>;
    }

    render() {
        const {Header, Row,HeaderCell, Body}= Table;

        return (
            <Layout>
                <h3>Department Show</h3>
                <Grid>
                    <Grid.Row >
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Card.Group  doubling>
                                <Card    color='red' header={this.state.id_level} meta='學號等級'/>

                                <Card  color='orange' header={this.state.email_level} meta='email等級'/>
                              </Card.Group>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Card.Group  doubling>
                                <Card    color='red' header={this.state.name_level} meta='姓名等級'/>
                                <Card  color='orange' header={this.state.media_level} meta='社群媒體等級'/>
                              </Card.Group>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Card.Group  doubling>
                                <Card    color='red' header={this.state.job_level} meta='職稱等級'/>
                                <Card  color='orange' header={this.state.balance} meta='校友捐獻(eth)'/>
                              </Card.Group>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Dimmer active={this.state.refreshing} inverted>
                                <Loader>Loading Posts</Loader>
                            </Dimmer>
                            {this.renderPost()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Card color='yellow'>
                                <CardContent>
                                    <Card.Header>贊助系所</Card.Header>
                                    <Card.Meta>回饋你最愛的母校</Card.Meta>
                                </CardContent>
                                <Card.Content extra>
                                    <Input size="mini" type='text' placeholder='Put...'
                                    value={this.state.value}
                                    onChange={event =>
                                      this.setState({ value: event.target.value })
                                    }
                                    action>
                                    <input />
                                    <Label>eth</Label>
                                    <Button size='mini' type='submit' primary onClick={this.Contribute} loading={this.state.loading}>Contribute!</Button>
                                    </Input>
                                    <Message error header="Oops!" hidden={this.state.errorvisible} content={this.state.errorMessage} />
                                </Card.Content>
                            </Card>
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