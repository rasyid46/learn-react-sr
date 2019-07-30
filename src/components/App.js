import React from 'react';  
// import Approuter from './Approuter';

import Approuter from '../route/Gnavbar';
// import Approuter from '../route/Authexample';
import Ruser from '../route/Ruser';
const App = () => {
  let access_token =  localStorage.getItem('access_token');
  if(access_token){ 
    return <div className="ui container">
    <Ruser /> 
        </div>;
  }else{
    return <div className="ui container">
    <Approuter /> 
        </div>;
  }
 

};
export default App;
