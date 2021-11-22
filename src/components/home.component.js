import React, { Component } from "react";

import UserService from "../services/user.service";
import {
  Row,Col,Container, Card,Button
} from "reactstrap";
// import {Button} from "bootstrap";
import {Link} from "react-router-dom";
export default class Home extends Component {
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
          <Row style={{width:'100%',background:'rgba(210,210,210,0.64)',textAlign:'center',alignItems:'center',borderRadius:20}}>

            <div style={{alignItems:'center',width:'100%',textAlign:'center'}}>
              <div style={{fontSize:'8vw',fontWeight:'bold'}}><span style={{color:'#2892D7'}}>BIG</span><span style={{color:'#173753'}}> DEALERSHIP</span></div>
            </div>

          </Row>
          <Row style={{width:'100%',alignItems:'center',textAlign:'center'}}>
            <div style={{alignItems:'center',textAlign:'center'}}>
              <img
                  src={("img/logo.png")}
                  width= '400vw'
              />
            </div>
          </Row>

        </Col>
        <Row style={{width:'100%',alignItems:'center',textAlign:'center'}}>
          <div>
            <Button style={{width:'80vw',background:'#2892D7'}}  tag={Link} to="/login"><span style={{fontSize:'3vw'}}>GET START</span></Button>
          </div>
        </Row>
        <Row style={{width:'100%'}}>

        </Row>



      </div>

    );
  }
}
