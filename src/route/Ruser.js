import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  Navbar,Nav } from 'react-bootstrap';

import Pagepos from '../components/dataCucian';
import LoginForm from '../components/LoginForm'; 

import Data_profile from '../components/data_profile/Data_profile';
import Redux_data_profile from '../components/data_profile/Redux_data_profile';
class Gnavbar extends React.Component{
     
    data_cucian() {
        return <Pagepos/>;
      }
      
      profile() {
        return <Data_profile />;
      }

      profileRedux(){
        return <Redux_data_profile />;
      }
      
      Login() {
         return <LoginForm/>;
      }
      
       

    

        AppRouter() {
           
        return (
          <Router>
            <Navbar bg="light" expand="lg">
      
            <Link to="/" className="navbar-brand" >Reach Bootstrap</Link>
      
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/data_cucian" className="nav-link">Cek cucian </Link>
                    <Link to="/profile/" className="nav-link" >Profile </Link>
                    <Link to="/profileRedux/" className="nav-link" >Profile Redux </Link>
                    <Link to="/login" className="nav-link" >Logout</Link>
                 
                </Nav>
              </Navbar.Collapse>
                </Navbar>
                    <Route path="/data_cucian" exact component={this.data_cucian} />
                    <Route path="/profile/" component={this.profile} />
                    <Route path="/profileRedux" component={this.profileRedux} />
                    <Route path="/login/" component={this.Login} />
                </Router>
              );
      }

    render(){
        console.log(this.props.posts);
        return <div className="ui relax divided list">{this.AppRouter()}</div>;
    }
}

 

export default Gnavbar;