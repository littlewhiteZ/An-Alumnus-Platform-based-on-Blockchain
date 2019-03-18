import React, {Component} from 'react';
import {Card, Button, Input, Message} from 'semantic-ui-react';
import Department from '../../ethereum/department';
import factory from '../../ethereum/factory';
import token from '../../ethereum/token';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';
import {Router} from '../../routes';
import Editor from '../../components/Editor';
import ipfs from '../../utils/ipfs';


class CampaignIndex extends Component {
    state={
        address: '',
        newperson: '',
        posthtml: '',
        post: '',
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
            
            return {
                header: this.props.names[index],
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
    
        const {id,name,job,media,email} = this.state;

        this.setState({loading:true,errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await department.methods
                .createPost(id,name,job,media,email)
                .send({from: accounts[0]});

            Router.pushRoute("/manage/index");
        } catch (err) {
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false});
        
    };

    render() {
        return (
            <Layout>
                <div>
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