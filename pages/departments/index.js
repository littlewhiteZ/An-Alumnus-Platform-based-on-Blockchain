import React, {Component} from 'react';
import {Card, Button, Input, Message} from 'semantic-ui-react';
import Department from '../../ethereum/department';
import factory from '../../ethereum/factory';
import token from '../../ethereum/token';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';
import {Router} from '../../routes';


class DepartmentIndex extends Component {
    state={
        address: '',
        newperson: '',
        errorMessage: '',
        errorvisible: true,
        loading: false
    };

    async componentDidMount() {
        const address = await factory.methods.tokenAddress().call();
        this.setState({address});
    }
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedDepartments().call();
        const names = await Promise.all( 
            campaigns.map( async address => {
                const department = Department(address);
                const summary =await department.methods.getSummary().call();
                return summary[0];
            })
        );
        return {campaigns,names};
    }

    renderCampaigns() {
        const items =this.props.campaigns.map((address,index) => {
            
            console.log(this.props.names);
            return {
                header: this.props.names[index],
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
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    };
}

export default DepartmentIndex;