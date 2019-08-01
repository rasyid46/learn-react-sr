import React from "react";
import { BrowserRouter as Router, Route, Link , Redirect } from "react-router-dom";
import {  Navbar,Nav } from 'react-bootstrap';

import Pagepos from '../components/Pagepos';
import LoginForm from '../components/LoginForm'; 



class Gnavbar extends React.Component{
     

   
      Index() {
        return <Pagepos/>;
      }
      
        About() {
        return <h2>About</h2>;
      }
      
        Login() {
            return <LoginForm/>;
      }
      
        LogoutLink(){
        // logout();
        // this.props.signOut();
        console.log('Logout Link');
        // console.log(this.props);
        return <h2>logout page</h2>;
      }

      

      menulogin(){

        let access_token =  localStorage.getItem('access_token');
        if(access_token){
          
        }else{
         
        }

      }

        AppRouter() {
          
        return (
          <Router>
            <Navbar bg="light" expand="lg">
      
            <Link to="/" className="navbar-brand" >Reach Bootstrap</Link>
      
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">PostList</Link>
                    <Link to="/about/" className="nav-link" >About</Link> 
                    <Link to="/login/" className="nav-link" >Login / Logout </Link>
                </Nav>
              </Navbar.Collapse>
                </Navbar>
                    <Route path="/" exact component={this.Index} />
                    <Route path="/about/" component={this.About} />
                    <Route path="/login/" component={this.Login} />
                    <Route path="/logout" component={this.LogoutLink} />

                    
                     

                    <li>
           
          </li>
                </Router>
              );
      }


     
    render(){
        console.log(this.props.posts);
        return <div className="ui relax divided list">{this.AppRouter()}</div>;
    }
}

 


const fakeAuth = {
  
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
 

function Protected() {
  return <h3>Protected</h3>;
}


export default  Gnavbar ;