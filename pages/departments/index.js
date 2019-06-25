import React, {Component} from 'react';
import {Card, Dimmer, Loader} from 'semantic-ui-react';
import Department from '../../ethereum/department';
import factory from '../../ethereum/factory';
import token from '../../ethereum/token';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';
import {Router} from '../../routes';
import measure from '../../utils/measure';



class Index extends Component {
    state={
        refreshing: true,
        names:[],
        departments:[]
    };

    async componentDidMount() {
        const address = await factory.methods.tokenAddress().call();
        const departments = await measure('get deployed Departmwnts',async ()=>{
            return await factory.methods.getDeployedDepartments().call();
        });
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
                    <Link route={`/departments/${address}`}>
                        <a>View Department</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>NCU 各系校友</h3>
                    <Dimmer inverted active={this.state.refreshing}>
                         <Loader content="Loading" />
                    </Dimmer>

                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    };
}

export default Index;