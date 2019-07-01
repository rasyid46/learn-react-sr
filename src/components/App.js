import React from 'react';
 
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './Imagelist';
class  App extends React.Component {
   state = { images: [] };



   OnSeacrhSubmit = async (term) => {
    console.log(term);
    const response  = await
     unsplash.get('search/photos',{
       params :{query: term},
     
     });
     console.log(response.data.results.length);
     // set state image
      this.setState({ images : response.data.results });
  }

  render(){
    return <div className="ui container"> 
    <SearchBar  onSubmit={this.OnSeacrhSubmit} nama="sule"/>
    
      <h2>Found : {this.state.images.length}  </h2>
      <ImageList   images ={this.state.images}/>
    </div>;
    
  }
 
};

export default App;