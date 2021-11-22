import React, { Component } from "react";
import { FaBeer,FaFacebook,FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
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
          <Row style={{width:'100%',background:'rgba(210,210,210,0.64)',textAlign:'center',alignItems:'center',borderRadius:20,margin:0}}>

            <div style={{alignItems:'center',width:'100%',textAlign:'center'}}>
              <div style={{fontSize:'8vw',fontWeight:'bold'}}><span style={{color:'#2892D7'}}>BIG</span><span style={{color:'#173753'}}> DEALERSHIP</span></div>
            </div>

          </Row>
          <Row style={{width:'100%',alignItems:'center',textAlign:'center',margin:0}}>
            <div style={{alignItems:'center',textAlign:'center',margin:0}}>
              <img
                  src={("img/logo.png")}
                  width= '300vw'
              />
            </div>
          </Row>
          <Row style={{width:'100%',alignItems:'center',textAlign:'center',margin:0}}>
            <div>
              <Button style={{width:'80vw',background:'#2892D7'}}  tag={Link} to="/register"><span style={{fontSize:'3vw'}}>CREATE YOUR SHOP</span></Button>
            </div>
          </Row>
        </Col>

        <Row style={{width:'100%',background:'rgba(210,210,210,0.64)',textAlign:'center',alignItems:'center',borderRadius:10,margin:0,marginTop:40,padding:20}}>
          <Col md="4" xd="12">
            <div style={{alignItems:'center',width:'100%',textAlign:'center',background:'rgba(177,177,177,0.64)',borderRadius:10,marginBottom:10, marginTop:10}}>
              <div style={{fontSize:'24px',fontWeight:'bold'}}><span style={{color:'#173753'}}>Online store</span></div>
            </div>
          </Col>
          <Col md="4" xd="12">
            <div style={{alignItems:'center',width:'100%',textAlign:'center',background:'rgba(177,177,177,0.64)',borderRadius:10,marginBottom:10, marginTop:10}}>
              <div style={{fontSize:'24px',fontWeight:'bold'}}><span style={{color:'#173753'}}>Create the orders</span></div>
            </div>
          </Col>
          <Col md="4" xd="12">
            <div style={{alignItems:'center',width:'100%',textAlign:'center',background:'rgba(177,177,177,0.64)',borderRadius:10,marginBottom:10, marginTop:10}}>
              <div style={{fontSize:'24px',fontWeight:'bold'}}><span style={{color:'#173753'}}>Track the orders</span></div>
            </div>
          </Col>


        </Row>
        <Row style={{width:'100%',background:'rgb(23,55,83)',margin:0,marginTop:40,padding:20}}>
          <Col md="4" xd="12">
            <div style={{fontSize:'12px',marginTop:5,marginBottom:5}}><span style={{color:'#ffffff'}}>Copyright © 2021 All Rights Reserved by BIG DEALERSHIP.</span></div>
          </Col>
          <Col md="4" xd="12">

            <Row style={{width:'100%'}}>
              <Col md="3" xd="3">
              </Col>
              <Col md="2" xd="2">
                <a href="https://www.facebook.com/Big-Dealership-104734122042154/?notif_id=1637589326825608&notif_t=page_invite_accept&ref=notif" target='_blank'>
                  <div style={{background:'white',borderRadius:50,width:'30px',height:'30px',textAlign:'center',marginTop:5,marginBottom:5}}>  <FaFacebook /></div>
                </a>
              </Col>
              <Col md="2" xd="2">
                <a href="https://www.youtube.com/channel/UCRnE5ucWNMYkcjd8Z67wMeg" target='_blank'>
                  <div style={{background:'white',borderRadius:50,width:'30px',height:'30px',textAlign:'center',marginTop:5,marginBottom:5}}>  <FaYoutube /></div>
                </a>
              </Col>
              <Col md="2" xd="2">
                <a href="#" target='_blank'>
                  <div style={{background:'white',borderRadius:50,width:'30px',height:'30px',textAlign:'center',marginTop:5,marginBottom:5}}>  <FaInstagram /></div>
                </a>
              </Col>
              <Col md="3" xd="3">
                <a href="mailto:big.dealership@gmail.com" target='_blank'>
                  <div style={{background:'white',borderRadius:50,width:'30px',height:'30px',textAlign:'center',marginTop:5,marginBottom:5}}>  <FaEnvelope /></div>
                </a>
              </Col>


            </Row>

          </Col>
          <Col md="4" xd="12">
            <div style={{fontSize:'12px',textAlign:'right',marginTop:5,marginBottom:5}}>
              <span style={{color:'#ffffff',marginRight:10}}>
                <a href="/contactus" style={{color:'#ffffff'}}>Contact Us</a>
              </span>
              <span style={{color:'#ffffff',marginRight:10}}>
                <a href="/aboutus" style={{color:'#ffffff'}}>About Us</a>
              </span>
              <span style={{color:'#ffffff'}}>
                <a href="/privacypolicy" style={{color:'#ffffff'}}>Privacy Policy</a>
              </span></div>
          </Col>
        </Row>

      </div>

    );
  }
}
