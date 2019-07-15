import React from 'react';
import {connect} from 'react-redux';
import {fetchUserAll} from '../actions';

class UserList extends React.Component{

    componentDidMount(){
        this.props.fetchUserAll();
    }

    renderList(){
       return this.props.allUser.map(allUser => {
        return (
            <div className="item" key={allUser.id}>
                  <i className="large middle aligned icon user" />
                  <div className="content">
                      <div className="description">
                        <h2>{allUser.name}</h2>
                        <p>{allUser.email}</p>
                      </div>    
                  </div>
               </div>
        );
       });
    }

    render(){
        
        return <div className="ui relax divided list">User list {this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    
    return { allUser : state.allUser };
}

export default connect (
    mapStateToProps ,
     {fetchUserAll}
     )(UserList);