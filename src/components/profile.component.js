import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      items: [],
      isLoading: true,

    };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })


    this.setState({isLoading: true});

    fetch('http://localhost:8080/api/items')
        .then(response => response.json())
        .then(data => this.setState({items: data, isLoading: false}));

  }

  async remove(id) {
    await fetch(`http://localhost:8080//api/item/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log("Remove Done!");
      let updatedItems = [...this.state.items].filter(i => i._id !== id);
      this.setState({items: updatedItems});
    });
  }






  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;


    const {items, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const itemList = items.map(item => {
      // username: String,
      //     itemID: String,
      //     itemName: String,
      //     quantity: String,
      //     itemStatus: String,

      return <tr key={item._id}>
        <td style={{whiteSpace: 'nowrap'}}>{item.username}</td>
        <td>{item.itemID}</td>
        <td>{item.itemName}</td>
        <td>{item.quantity}</td>
        <td>{item.itemStatus}</td>
        {/*<td><a href={customer.copyright}>{customer.copyright}</a></td>*/}
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/items/" + item._id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(item._id)}>Delete</Button>
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
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}


        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/items/new">Add Item</Button>
          </div>
          <h3>Item List</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">User Name</th>
              <th width="20%">Item ID</th>
              <th width="10%">Item Name</th>
              <th>Quantity</th>
              <th>Status</th>
              {/*<th>Copyrightby</th>*/}
              <th width="10%">Actions</th>
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
