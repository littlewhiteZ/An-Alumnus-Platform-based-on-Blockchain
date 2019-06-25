import React, {Component} from 'react';
import {Form, Button,Message,Input} from 'semantic-ui-react';
import Department from '../../../ethereum/department';
import web3 from '../../../ethereum/web3';
import {Link,Router} from '../../../routes';
import Layout from '../../../components/Layout';
import measure from '../../../utils/measure';



class RequestNew extends Component {
    state = {
        id: '',
        name: '',
        job: '',
        media: '',
        email: '',
        loading: false,
        errorMessage: ''
    };

static async getInitialProps(props) {
    const {address} = props.query;

    return {address};
}

onSubmit = async (event) => {
    event.preventDefault();

    const department = Department(this.props.address);
    
    const {id,name,job,media,email} = this.state;

    this.setState({loading:true,errorMessage: ''});

    try {
        const accounts = await web3.eth.getAccounts();

        await measure('create person',async ()=> {
            await department.methods
            .createPerson(id,name,job,media,email)
            .send({from: accounts[0]});
        });
    
        Router.pushRoute(`/departments/${this.props.address}`);
    } catch (err) {
        this.setState({errorMessage: err.message});
    }

    this.setState({loading: false});
};

render() {
    return (
        <Layout> 
            <Link route={`/departments/${this.props.address}`}>
                    <a>
                        <Button primary>Back</Button>
                    </a>
            </Link> 
            <h3>New Person</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                <label>學號</label>
                <Input placeholder="write..."
                    value={this.state.id}
                    onChange={event=>this.setState({id: event.target.value})}
                />
                </Form.Field>

                <Form.Field>
                <label>姓名</label>
                <Input placeholder="write..."
                    value={this.state.name}
                    onChange={event=>this.setState({name: event.target.value})}
                />
                </Form.Field> 

                <Form.Field>
                <label>職稱</label>
                <Input placeholder="write..."
                    value={this.state.job}
                    onChange={event=>this.setState({job: event.target.value})}
                />
                </Form.Field> 

                <Form.Field>
                <label>社群媒體</label>
                <Input placeholder="write..."
                    value={this.state.media}
                    onChange={event=>this.setState({media: event.target.value})}
                />
                </Form.Field> 

                <Form.Field>
                <label>email</label>
                <Input placeholder="write..."
                    value={this.state.email}
                    onChange={event=>this.setState({email: event.target.value})}
                />
                </Form.Field> 
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>New!</Button>           
            </Form>
        </Layout>
        )
    }
}

export default RequestNew;