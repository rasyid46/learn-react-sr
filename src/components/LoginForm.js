import React from 'react'; 
import { Form ,Button , Breadcrumb , FormGroup,FormControl} from 'react-bootstrap';
import {loginPost, logout} from '../api/JWTAuth';

import {connect} from 'react-redux';
import {signIn,signOut } from '../actions';
import { Route, Redirect , withRouter } from 'react-router'


class LoginForm extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
      }
      componentDidMount(){
        let access_token =  localStorage.getItem('access_token');
        console.log(this.props);
        if(access_token){
          this.props.signIn(access_token);
        } 
      }

      handleSubmit = async event => {
        event.preventDefault();
      
        try {
 
          let data =    {
            email: this.state.email,
            password:this.state.password           
          } 

           let response  = await loginPost(data);
           if(response.code==200){
              this.props.signIn(); 
              window.location.reload();  
           }
       
      } catch (e) {
          var myJSON = JSON.stringify(e.message);
          console.log(myJSON);
        }
      }

 

 
    onSignOutClick = () => {
      logout();
      this.props.signOut(); 
      window.location.reload(); 
    };


    renderAuthButton(){
      if(this.props.isSignedIn){
          return( 
          <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
          </button>
          );
      }else{
          return ( 
          <button onClick={this.onSignInClick} className="ui red google button">
              <i className="google icon" />
              Sign in with google
          </button>
          );  
      }    
   }


    renderLoginCondition(){
       if(this.props.signIn){
        this.props.signOut();
      return (
        <div>
          <button className="btn btn-primary" onClick = { logout }>Log out</button>
        </div>
      );
      }else{
      return (
        <div>
          login
        </div>
      );
      }
    }  
    
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    databreadcrumb(){
      return  <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="">
          Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      ;
    }


    render(){
      if(this.props.isSignedIn){
        
        return <div>YOu are Login

        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
          </button>

        </div>;
      }else{
        return <div>
        <this.databreadcrumb />
         <form onSubmit={this.handleSubmit}>
         <FormGroup controlId="email"  >
         <Form.Label>Email</Form.Label>
         <FormControl
           autoFocus
           type="text"
           value={this.state.email}
           onChange={this.handleChange}
         />
       </FormGroup>
       <FormGroup controlId="password"  >
         <Form.Label>Password</Form.Label>
         <FormControl
           value={this.state.password}
           onChange={this.handleChange}
           type="password"
         />
       </FormGroup>
       <Button
         block
         
         disabled={!this.validateForm()}
         type="submit"
       >
         Login
       </Button>
     </form>
        
         
          
     </div>
   ;
      }
        
    }
}
 const mapStateToProps = (state) => {
   return { isSignedIn: state.auth.isSignedIn }
 };
 


export default withRouter(connect(
  mapStateToProps,
  {signIn, signOut }
)(LoginForm));