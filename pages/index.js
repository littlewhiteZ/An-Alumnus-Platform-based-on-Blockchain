import React, {Component} from 'react';
import {Card, Button, Input, Message} from 'semantic-ui-react';
import Department from '../ethereum/department';
import factory from '../ethereum/factory';
import token from '../ethereum/token';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import {Link} from '../routes';
import {Router} from '../routes';


class CampaignIndex extends Component {
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

    render() {
        return (
            <Layout>
                <div>
                    <Link route="/departments/index">
                        <a>
                            <Button
                                floated="left"
                                content="校友"
                                size="massive"
                                primary
                            />
                        </a>
                    </Link>
                    <Link route="/manage/index">
                        <a>
                            <Button
                                floated="right"
                                content="管理員"
                                size="massive"
                                primary
                            />
                        </a>
                    </Link>
                </div>
            </Layout>
        );
    };
}

export default CampaignIndex;