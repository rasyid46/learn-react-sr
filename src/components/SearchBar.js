import React from 'react';

class SearchBar extends React.Component{
 state  = { term :  ''};
    onInputChange(event){
        console.log(event.target.value);
    }

    onFormSubmint(e){
        e.preventDefault();
        console.log('a');
        this.props.onSubmit(this.state.term);
    }
   render(){
       return (
        <div className="ui segmet">
           <form className="ui form">
              <div className="field">
                 <label> Image Seaccrh</label>
                 {/* <input type="text" value={this.state.term} onChange={this.onInputChange}></input> */}
                 <input type="text" value={this.state.term}
                  onChange={e =>this.setState({ term: e.target.value.toUpperCase()})}></input>
              </div>
              
           </form>
       </div>
       );
       
       
   }
}

export default SearchBar;