import React from 'react'; 
import { Form ,Button , Breadcrumb} from 'react-bootstrap';
import {loginPost, logout} from '../api/JWTAuth';

import {connect} from 'react-redux';
import {signIn,signOut } from '../actions';

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
        console.log('componentDidMount');
        this.props.signOut();
        console.log(this.props);
        if(access_token){
          console.log('logout');
          this.props.signIn(access_token);
        } 
      
      }
      handleSubmit = async event => {
        event.preventDefault();
      
        try {
 
          let data =    {
            email: this.state.email,
            password:this.state.password           
          } ;

          let datab =    {
            email: 'admin@laundry.com',
            password:'admin1234!'
           
          } ;
           let response  = await loginPost(datab);
           if(response.code==200){
              this.setState({mode: 'edit'});
           }
       
      } catch (e) {
          var myJSON = JSON.stringify(e.message);
          console.log(myJSON);
        }
      }


      loginaja =  async dispatch    => {
        
      
        try {
 
       

          let datab =    {
            email: 'admin@laundry.com',
            password:'admin1234!'
           
          } ;
           let response  = await loginPost(datab);
           if(response.code==200){
              this.setState({mode: 'edit'});
           }
       
      } catch (e) {
          var myJSON = JSON.stringify(e.message);
          console.log(myJSON);
        }
      }


      onSignInClick = async dispatch => {
       let response=  await this.loginaja();
        this.props.signIn();        
    };

    onSignOutClick = () => {
      logout();
      this.props.signOut();
    };


    renderAuthButton(){
      if(this.props.isSignedIn === null){
          return null;
      }else if(this.props.isSignedIn){
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
      console.log('renderLoginCondition');
      console.log(this.props.isSignedIn);
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

    render(){
      console.log('render  prop');
         console.log(this.props);
        return <div>

            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
              <Form  onSubmit={this.handleSubmit} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
            {this.renderAuthButton()}
 


        </div>
      ;
    }
}
 const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  console.log(state);
 return { isSignedIn: state.auth.isSignedIn }
 };
export default connect(
  mapStateToProps,
  {signIn, signOut }
)(LoginForm);