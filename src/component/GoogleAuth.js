import React from 'react';

 class GoogleAuth extends React.Component {
     state = { isSignedIn: null };

     componentDidMount(){
         console.log('gooapi');
         window.gapi.load('client:auth2', () =>{
             window.gapi.client
             .init({
                 clientId :
                 '915248029081-s50m85j0g90gckcpv04r1lut0h512e3h.apps.googleusercontent.com',
                 scope : 'email'
             })
             .then(() => {
                 this.auth = window.gapi.auth2.getAuthInstance();
                 this.setState({isSignedIn: this.auth.isSignedIn.get() });
                 this.auth.isSignedIn.listen(this.onAuthChange);
             });
         });
     }
   
     onAuthChange = () => {
        this.setState({isSignedIn : this.auth.isSignedIn.get() });
    };
     
    onSignInClick = () => {
        this.auth.signIn();        
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

     renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
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

export default GoogleAuth;