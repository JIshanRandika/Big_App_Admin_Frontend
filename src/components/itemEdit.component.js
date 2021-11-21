import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// import AppNavbar from './AppNavbar';

class ItemEdit extends Component {
    // username: String,
    //     itemID: String,
    //     itemName: String,
    //     quantity: String,
    //     itemStatus: String,

    emptyItem = {
        username: '',
        itemID: '',
        itemName: '',
        // quantity: '',
        itemStatus: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const rooturl = process.env.rooturl || 'http://localhost:8080'

        if (this.props.match.params.id !== 'new') {
            const item = await (await fetch(rooturl+`/api/item/${this.props.match.params.id}`)).json();
            this.setState({item: item});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        const rooturl = process.env.rooturl || 'http://localhost:8080'

        await fetch(rooturl+'/api/item', {
            method: (item._id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/profile');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item._id ? 'Edit Item' : 'Add Item'}</h2>;

        return <div>
            {/*<AppNavbar/>*/}
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">User Name</Label>
                        <Input type="text" name="username" id="username" value={item.username || ''}
                               onChange={this.handleChange} autoComplete="username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemID">Item ID</Label>
                        <Input type="text" name="itemID" id="itemID" value={item.itemID || ''}
                               onChange={this.handleChange} autoComplete="itemID"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemName">Item Name</Label>
                        <Input type="text" name="itemName" id="itemName" value={item.itemName || ''}
                               onChange={this.handleChange} autoComplete="itemName"/>
                    </FormGroup>
                    {/*<FormGroup>*/}
                    {/*    <Label for="quantity">Quantity</Label>*/}
                    {/*    <Input type="text" name="quantity" id="quantity" value={item.quantity || ''}*/}
                    {/*           onChange={this.handleChange} autoComplete="quantity"/>*/}
                    {/*</FormGroup>*/}
                    <FormGroup>
                        <Label for="itemStatus">Status</Label>
                        <Input type="text" name="itemStatus" id="itemStatus" value={item.itemStatus || ''}
                               onChange={this.handleChange} autoComplete="itemStatus"/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/profile">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(ItemEdit);
