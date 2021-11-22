import React, { Component } from "react";
import { FaBeer,FaFacebook,FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import UserService from "../services/user.service";
import {
    Row,Col,Container,Button
} from "reactstrap";
import { Card } from 'react-bootstrap';

// import {Button} from "bootstrap";
import {Link} from "react-router-dom";
export default class AboutUsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <div >
                {/*<header className="jumbotron">*/}
                {/*  <h3>{this.state.content}</h3>*/}
                {/*</header>*/}

                <Container>
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>About Us</Card.Title>
                            <Card.Text>
                                Day to day life we are buying products and services. However, we don't like to waste our valuable time when we go to a shop to buy something. Some people have no patience until their turn comes. So people have a habit of pre-ordering, but every service provider cannot afford an online ordering system with the development and maintenance cost for an extra system. As a solution BIG DEALERSHIP provides a platform to manage the online orders in your business.

                                Some businesses use a call system to get the orders from customers. But this is not perfect for good customer service. Because we have to answer the calls which come from customers. If we could not answer a call (with line busy, connection issue, etc) which course to affect the customer satisfaction. And customers cannot order in 24hour if business is available only at a specific time. As well as customers cannot know about their order until they come to collect their orders without calling the shop. Through the BIG DEALERSHIP app customers can track their orders with the status (which is accepted, ready, completed).

                            </Card.Text>
                            {/*<Button variant="primary">Go somewhere</Button>*/}
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Container>



            </div>

        );
    }
}
