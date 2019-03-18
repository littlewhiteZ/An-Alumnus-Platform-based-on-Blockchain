import React,{Component} from 'react';
import { Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Department from '../ethereum/department';
import ipfs from '../utils/ipfs';

class RequestRow extends Component {

    static async getInitialProps(props) {
        const {person} = props.query;
        
        return {person};
    }

    async componentDidMount() {
        
        
      }

    onApprove = async () => {
        const department = Department(this.props.address);

        const accounts = await web3.eth.getAccounts();
       
    };

    onUpdate = async () => {
        const department = Department(this.props.address);

        const accounts = await web3.eth.getAccounts();
        
    };


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
                    {person.isApproved ?  <Button color="green" basic disabled>Update</Button> : (
                        <Button color="green" basic onClick={this.onUpdate}>Update</Button>
                    )}
                </Cell>
                <Cell>
                    {!person.isApproved ? <Button color="green" basic disabled>Approve</Button> : (
                        <Button color="teal" basic onClick={this.onApprove}>Approve</Button>
                    )} 
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;