import React, {Component} from 'react';
import {Card, Button, Input, Message, Dimmer, Loader} from 'semantic-ui-react';
import Department from '../../ethereum/department';
import factory from '../../ethereum/factory';
import token from '../../ethereum/token';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';
import {Router} from '../../routes';



class CampaignIndex extends Component {
    state={
        address: '',
        newperson: '',
        names:[],
        departments:[],
        errorMessage: '',
        errorvisible: true,
        loading: false,
        refreshing: true
    };

    async componentDidMount() {
        const address = await factory.methods.tokenAddress().call();
        const departments = await factory.methods.getDeployedDepartments().call();
        const names = await Promise.all( 
            departments.map( async address => {
                const department = Department(address);
                const summary =await department.methods.getSummary().call();
                return summary[0];
            })
        );
        this.setState({address,names,departments,refreshing:false});
    }

    renderCampaigns() {
        const items =this.state.departments.map((address,index) => {
            
            return {
                header: this.state.names[index],
                description: (
                    <Link route={`/manage/${address}`}>
                        <a>View Department</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }
    
    addPerson = async (event)=>{
        event.preventDefault();
        this.setState({ errorvisible: true});
        this.setState({loading: true, errorMessage: ''});
        console.log(typeof (this.state.newperson));
        try {
            const accounts = await web3.eth.getAccounts();
            
            await token.methods
                .addMinter(this.state.newperson)
                .send({
                    from: accounts[0]
                });
                
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorvisible: false});
            this.setState({ errorMessage: err.message });
        }
        this.setState({loading: false});
    };


    render() {
        return (
            <Layout>
                <div>
                    <Dimmer inverted active={this.state.refreshing}>
                         <Loader content="Loading" />
                    </Dimmer>
                    <Button onClick={this.addPerson} loading={this.state.loading} floated="right" content="新增校友" icon="add circle" primary/>
                    <Input value={this.state.newperson}
                        onChange={event => this.setState({newperson: event.target.value})}
                        fluid
                    />
                    <Message error hidden={this.state.errorvisible} header="Oops!" content={this.state.errorMessage}/>
                    <h3/>
                    <h4>Token Address {this.state.address}</h4>
                    <Link route="/departments/new">
                        <a>
                            <Button
                                floated="right"
                                content="新增系級"
                                icon="add circle"
                                primary
                            />
                        </a>
                    </Link>
                    
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    };
}

export default CampaignIndex;