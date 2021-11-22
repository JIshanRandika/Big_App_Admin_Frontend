import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container,Nav, NavDropdown} from 'react-bootstrap';

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import ItemList from './components/itemEdit.component';
import ItemEdit from './components/itemEdit.component';
import NewOrder from './components/newOrder.component';
import AcceptedOrder from './components/acceptedOrder.component';
import ReadyOrder from './components/readyOrder.component';
import CompletedOrder from './components/completedOrder.component';

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <div style={{background:'#173753'}}>
        {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
          <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">BIG DEALERSHIP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                {showModeratorBoard && (
                    <Nav.Link href="/mod">Moderator Board</Nav.Link>
                )}
                {showAdminBoard && (
                    <Nav.Link href="/admin">Admin Board</Nav.Link>
                )}
                {currentUser && (
                    <Nav.Link href="/user">User</Nav.Link>
                )}

              </Nav>
              <Nav>
                {currentUser && (
                    <Nav.Link eventKey={2} href="/neworder">
                      New Orders
                    </Nav.Link>

                )}
                {currentUser && (
                    <Nav.Link eventKey={2} href="/acceptedorder">
                      Accepted Orders
                    </Nav.Link>

                )}
                {currentUser && (
                    <Nav.Link eventKey={2} href="/readyorder">
                      Ready Orders
                    </Nav.Link>

                )}
                {currentUser && (
                    <Nav.Link eventKey={2} href="/completedorder">
                      Completed Orders
                    </Nav.Link>

                )}

                {currentUser ? (
                    <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
                    ):(
                    <Nav.Link href="/login">Login</Nav.Link>
                )}


                {currentUser ? (
                    <Nav.Link href="/login">
                      <a style={{margin:0,padding:0}} href="/login" className="nav-link" onClick={this.logOut}>
                        Log Out
                      </a>
                    </Nav.Link>
                ):(
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                )}
                {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

        {/*<nav className="navbar navbar-expand navbar-dark bg-dark">*/}
          {/*<Link to={"/"} className="navbar-brand">*/}
          {/*  BIG DEALERSHIP*/}
          {/*</Link>*/}
          {/*<div className="navbar-nav mr-auto">*/}
          {/*  <li className="nav-item">*/}
          {/*    <Link to={"/home"} className="nav-link">*/}
          {/*      Home*/}
          {/*    </Link>*/}
          {/*  </li>*/}

          {/*  {showModeratorBoard && (*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link to={"/mod"} className="nav-link">*/}
          {/*        Moderator Board*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  )}*/}

          {/*  {showAdminBoard && (*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link to={"/admin"} className="nav-link">*/}
          {/*        Admin Board*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  )}*/}

          {/*  {currentUser && (*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link to={"/user"} className="nav-link">*/}
          {/*        User*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  )}*/}
          {/*</div>*/}

        {/*  {currentUser ? (*/}
        {/*    <div className="navbar-nav ml-auto">*/}
        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/profile"} className="nav-link">*/}
        {/*          {currentUser.username}*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/neworder"} className="nav-link">*/}
        {/*          NewOrders*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/acceptedorder"} className="nav-link">*/}
        {/*          AcceptedOrders*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/readyorder"} className="nav-link">*/}
        {/*          ReadyOrders*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/completedorder"} className="nav-link">*/}
        {/*          CompletedOrders*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <a href="/login" className="nav-link" onClick={this.logOut}>*/}
        {/*          LogOut*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    <div className="navbar-nav ml-auto">*/}
        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/login"} className="nav-link">*/}
        {/*          Login*/}
        {/*        </Link>*/}
        {/*      </li>*/}

        {/*      <li className="nav-item">*/}
        {/*        <Link to={"/register"} className="nav-link">*/}
        {/*          Sign Up*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</nav>*/}

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/neworder" component={NewOrder} />
            <Route exact path="/acceptedorder" component={AcceptedOrder} />
            <Route exact path="/readyorder" component={ReadyOrder} />
            <Route exact path="/completedorder" component={CompletedOrder} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path='/items' exact={true} component={ItemList}/>
            <Route path='/items/:id' component={ItemEdit}/>
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
