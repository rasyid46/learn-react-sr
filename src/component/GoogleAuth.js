import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut } from '../actions';
 
class GoogleAuth extends React.Component {
        componentDidMount(){  //  state = { isSignedIn: null };
         window.gapi.load('client:auth2', () => {
             window.gapi.client
             .init({
                 clientId :
                 '915248029081-s50m85j0g90gckcpv04r1lut0h512e3h.apps.googleusercontent.com',
                 scope : 'email'
             })
             .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); //  this.setState({isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
             });
         });
     }
   
     onAuthChange = ( isSignedIn ) => {
        if(isSignedIn){    
            const   userId =this.auth.currentUser.get().getId();    // this.setState({isSignedIn : this.auth.isSignedIn.get() });
            this.props.signIn(userId);
        }else{
            this.props.signOut();
        }
    };
     
    onSignInClick = () => {
        this.auth.signIn( );        
    };

    onSignOutClick = () => {
        this.auth.signOut();
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
     
     render(){
         return <div>{this.renderAuthButton()}</div>;
     }
 }

 const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
 };
 
export default connect(
    mapStateToProps,
    {signIn, signOut }
)(GoogleAuth);