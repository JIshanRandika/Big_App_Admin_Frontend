import React, { Component } from "react";
import { FaBeer,FaFacebook,FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import UserService from "../services/user.service";
import {
    Row,Col,Container, Card,Button
} from "reactstrap";
// import {Button} from "bootstrap";
import {Link} from "react-router-dom";
export default class PrivacyPolicy extends Component {
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


            </div>

        );
    }
}
