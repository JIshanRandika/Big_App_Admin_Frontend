import React, { Component } from "react";
import { FaBeer,FaFacebook,FaYoutube, FaInstagram, FaEnvelope,FaPhone } from 'react-icons/fa';
import UserService from "../services/user.service";
import {
    Row,Col,Container,Button
} from "reactstrap";
// import {Button} from "bootstrap";
import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
export default class ContactUsComponent extends Component {
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
                <Col md="12" xd="12">
                    <Row style={{width:'100%',textAlign:'center',alignItems:'center',borderRadius:20,margin:0}}>

                        <Col md="6" xd="12">
                            <a href="mailto:big.dealership@gmail.com">
                            <Card
                                bg='Secondary'
                                text='red'
                                style={{ width: '18rem',background:'#2892D7',color:'white',alignItems:'center',borderRadius:10 }}
                                className="mb-2"
                            >
                                <Card.Header>Email</Card.Header>
                                <Card.Header>big.dealership@gmail.com</Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <FaEnvelope style={{fontSize:100,alignSelf:'center'}}/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col md="6" xd="12">
                            <a href="https://wa.me/+94715757700">
                            <Card
                                bg='Secondary'
                                text='red'
                                style={{ width: '18rem',background:'#328e00',color:'white',alignItems:'center',borderRadius:10 }}
                                className="mb-2"
                            >
                                <Card.Header>Phone/Whatsapp</Card.Header>
                                <Card.Header>+94 71 57 57 700</Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <FaPhone style={{fontSize:100,alignSelf:'center'}}/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>

                    </Row>
                </Col>
            </div>

        );
    }
}
