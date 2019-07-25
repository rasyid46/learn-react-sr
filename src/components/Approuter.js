import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostList from './PostList'; 
import {  Navbar,Nav } from 'react-bootstrap';

function Index() {
  return <PostList/>;
}

function About() {
  return <h2>About</h2>;
}

function Login() {
    return <h2>Login</h2>;
}

function AppRouter() {
  return (
    <Router>

<Navbar bg="light" expand="lg">

<Link to="/" className="navbar-brand" >Reach Bootstrap</Link>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Link to="/" className="nav-link">PostList</Link>
        <Link to="/about/" className="nav-link" >About</Link>
        <Link to="/login/" className="nav-link" >Login</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/login/" component={Login} />
       
    </Router>
  );
}

export default AppRouter;
