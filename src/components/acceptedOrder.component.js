import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


export default class AcceptedOrderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" },
            items: [],
            orderIDList:[],
            isLoading: true,

        };
    }


    async updateOrder(id) {
        fetch('http://localhost:8080/api/updateReadyOrder', {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                _id:id,
                readyStatus:'done'

            }),
        }).then(window.location.reload());
    }



    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })


        this.setState({isLoading: true});

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ searchShopname: currentUser.username})
        };

        fetch('http://localhost:8080/api/acceptedorderforuser',requestOptions)
            .then(response => response.json())
            .then(data => this.setState({items: data, isLoading: false}));





    }








    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }







        const { currentUser } = this.state;


        const {items, isLoading} = this.state;

        items.map(item=>{
            var a = 'a'
            for(let i=0; i<items.keyLength;i++){
                if(a!==item.orderID){
                    a=item.orderID

                    const orderIDs = this.state.orderIDList;
                    orderIDs.push(item.orderID)
                }
            }

            console.log('this.state.orderIDList')
        })

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const itemList = items.map(item => {



            return <tr key={item._id}>

                <td>{item.orderID}</td>
                <td>{ item.itemAndQuantity.map((item, key)=>(
                    <div key={key} > { item } </div>)
                )}</td>
                <td>{item.orderDescription}</td>
                {/*<td><a href={customer.copyright}>{customer.copyright}</a></td>*/}
                <td>

                    <ButtonGroup>
                        <Button style={{background:"#006ec1",border:'none'}} size="sm"  onClick={() => this.updateOrder(item._id)} >Ready</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });



        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div>
                        <header className="jumbotron">
                            <h3>
                                <strong>{currentUser.username}</strong> Accepted Orders
                            </h3>
                        </header>

                        {/*<p>{this.state.orderIDList}</p>*/}
                    </div>: null}


                <Container fluid>

                    {/*<h3>Accepted Order List</h3>*/}
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            {/*<th width="20%">User Name</th>*/}
                            <th>OrderID</th>
                            <th>Order Items</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemList}
                        </tbody>
                    </Table>
                </Container>



            </div>


        );
    }
}
