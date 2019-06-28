import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class  App extends React.Component {
  OnSeacrhSubmit(term){
    console.log('tes');
  }
  render(){
    return <div className="ui container"> 
    <SearchBar  onSubmit={this.OnSeacrhSubmit}/>
       </div>;
  }
 
};

export default App;