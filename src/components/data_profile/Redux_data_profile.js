import React, {Component} from 'react';  
import {unsplash , data_spiner} from '../../api/JWTAuth';

import {connect} from 'react-redux';
import {fetchProfile} from '../../actions';
import { ListGroup ,Spinner } from 'react-bootstrap';

class Redux_data_profile extends React.Component{

    state = { profile: []  , loading : true};
    componentDidMount() {
        this.props.fetchProfile();
       
 
    }
    renderList(){
        console.log('renderList');
        const dataProfile =  this.props.profile; 
            return (<ListGroup>
            <ListGroup.Item>ID :    {dataProfile.id}</ListGroup.Item>
            <ListGroup.Item>Email :  {dataProfile.email}</ListGroup.Item>
            <ListGroup.Item>first_name :  {dataProfile.first_name}</ListGroup.Item> 
            </ListGroup>); 
     }

    render(){
        return <div>  {  (this.props.profile) ? this.renderList() : data_spiner() }    </div>;

           
     
    }
}
 

const mapStateToProps = (state) => {
    
    if(Array.isArray(state.profile)) {
        
        return { profile : state.profile };
    }
    else { 
        return { profile : state.profile.dataP }; 
    }
     
}


export default connect (
    mapStateToProps ,
     {fetchProfile}
     )(Redux_data_profile);