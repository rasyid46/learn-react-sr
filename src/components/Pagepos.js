import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
class Pagepos extends React.Component{

    componentDidMount(){
        
        this.props.fetchPosts();
    }     

    renderList(){

        return this.props.posts.map(post => {
           

         return  (
              <li className="list-group-item" key={post.id} >
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                      </div>
            </li>
 
        
         
         );
        
        });
     }


    render(){
         
        return <div className="ui relax divided list"> {this.renderList()} </div>;
    }
}

  

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log(state);
    return { posts : state.posts };
}

export default connect (
    mapStateToProps ,
     {fetchPosts}
     )(Pagepos);