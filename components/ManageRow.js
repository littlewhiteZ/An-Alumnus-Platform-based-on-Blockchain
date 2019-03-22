import React,{Component} from 'react';
import { Table, Button, Popup, Grid, Header, Input} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Department from '../ethereum/department';
import ipfs from '../utils/ipfs';
import {Router} from '../routes';

class ManageRow extends Component {

    state = {
        id: '',
        name: '',
        job: '',
        media: '',
        email: '',
        approveloading: false,
        updateloading: false,
        rejectloading: false,
        errorMessage: ''
    };

    static async getInitialProps(props) {
        const {id,person,address} = props.query;
        
        return {id,person,address};
    }

    async componentDidMount() {
        
        
      }

    onApprove = async () => {
        console.log(this.props);
        console.log(this.props.person.updator);
        const department = Department(this.props.address);

        this.setState({approveloading: true, errorMessage: ''});
        try {
            const accounts = await web3.eth.getAccounts();
            await department.methods
                .approvePerson(this.props.id)
                .send({
                    from: accounts[0]
                });

            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }
        
        this.setState({approveloading: false});
       
    };

    onUpdate = async () => {
        console.log(this.state.id);
        console.log(this.state.name);
        console.log(this.state.job);
        console.log(this.state.media);
        console.log(this.state.email);
        const department = Department(this.props.address);

        this.setState({updateloading: true, errorMessage: ''});
        try {
            const accounts = await web3.eth.getAccounts();
            await department.methods
                .updatePerson(this.props.id,this.state.id,this.state.name,this.state.job,this.state.media,this.state.email)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }
        
        this.setState({updateloading: false});
        
    };

    onReject = async () => {
        const department = Department(this.props.address);

        this.setState({rejectloading: true, errorMessage: ''});
        try {
            const accounts = await web3.eth.getAccounts();
            await department.methods
                .rejectPerson(this.props.id)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }
        
        this.setState({rejectloading: false});
    }


    render() {
        const {Row, Cell} = Table;
        const {person} = this.props;

        
        return (
            <Row >
                <Cell>{person.id}</Cell>
                <Cell>{person.name}</Cell>
                <Cell>{person.job}</Cell>
                <Cell>{person.media}</Cell>
                <Cell>{person.email}</Cell>
                <Cell>
                    {!person.isApproved ?  <Button color="green" basic disabled>Update</Button> : (
                        <Popup
                        trigger={<Button color="green" loading={this.state.updateloading} basic >Update</Button>}
                        content={
                            <Grid centered divided columns={6}>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>學號</Header>
                                    <p>{person.id}</p>
                                    <Input size="mini" 
                                        value={this.state.id}
                                        onChange={event=>this.setState({id: event.target.value})}>
                                    </Input>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>名字</Header>
                                    <p>{person.name}</p>
                                    <Input size="mini"
                                        value={this.state.name}
                                        onChange={event=>this.setState({name: event.target.value})}>
                                    </Input>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>職稱</Header>
                                    <p>{person.job}</p>
                                    <Input size="mini"
                                        value={this.state.job}
                                        onChange={event=>this.setState({job: event.target.value})}>
                                    </Input>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>社群媒體</Header>
                                    <p>{person.media}</p>
                                    <Input size="mini"
                                        value={this.state.media}
                                        onChange={event=>this.setState({media: event.target.value})}>
                                    </Input>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>Email</Header>
                                    <p>{person.email}</p>
                                    <Input size="mini"
                                        value={this.state.email}
                                        onChange={event=>this.setState({email: event.target.value})}>
                                    </Input>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <p/>
                                    <Button  primary loading={this.state.loading} onClick={this.onUpdate}>Update</Button>
                                </Grid.Column>
                            </Grid>
                        }
                        on='click'
                        flowing hoverable
                        />
                    )}
                </Cell>
                <Cell>
                    {person.isApproved ?  <Button color="teal" basic disabled>Approve</Button> : (
                        <Button color="teal" basic loading={this.state.approveloading} onClick={this.onApprove}>Approve</Button>
                    )} 
                </Cell>
                <Cell>
                    {person.isApproved ? <Button color="red" basic disabled>Reject</Button> : (
                        <Button color="red" basic loading={this.state.rejectloading} onClick={this.onReject}>Reject</Button>
                    )} 
                </Cell>
            </Row>
        );
    }
}

export default ManageRow;