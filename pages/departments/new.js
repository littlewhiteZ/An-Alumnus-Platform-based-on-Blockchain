import React, {Component} from 'react';
import {Form, Button, Input, Message} from "semantic-ui-react";
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import token from '../../ethereum/token';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class CampaignNew extends Component {
    state = {
        department: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async(event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''});

        try{
            const accounts = await web3.eth.getAccounts();
            const owner = await token.methods.owner().call();
    
            await factory.methods
                .createDepartment(this.state.department)
                .send({
                    from: accounts[0]
                });
                
            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({loading: false});
    };
    render () {
        return (
            <Layout>
                
                <h3>Create Department</h3>
                
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Department Name</label>
                        <Input 
                        label="系級" labelPosition="right"
                        value={this.state.department}
                        onChange={event => this.setState({department: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button loading={this.state.loading} primary>Create!</Button>

                </Form>
            </Layout>

        );
    }
}

export default CampaignNew;