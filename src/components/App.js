import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class  App extends React.Component {
  OnSeacrhSubmit(term){
    console.log(term);
     axios.get('https://api.unsplash.com/search/photos',{
       params :{query: term},
       headers: {
        Authorization : 'Client-ID 6e6ce98c8ebdb235f1507ebcb6770bbf2751b948a6127aca5b3d28a7e8720035'
       }
     })
     .then(response => {
       console.log(response.data.results)
     })
     ;
  }

  render(){
    return <div className="ui container"> 
    <SearchBar  onSubmit={this.OnSeacrhSubmit}/>
       </div>;
  }
 
};

export default App;