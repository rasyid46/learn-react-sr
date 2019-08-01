import React, {Component} from 'react';  
import {unsplash , data_spiner} from '../../api/JWTAuth';
class Data_profile extends Component{

    state = { profile: []  , loading : true};
    componentDidMount() {
        this._loadinitiate();
    }
    _loadinitiate = async (term) => {
     const response  = await unsplash.get('me');
     console.log(response.data);
     this.setState({ profile : response.data.data , loading : false  });
   }

    data_profile_res(){
     
       return <div> Data email {this.state.profile.email}</div>;
    }
    render(){
        return  <div>Profile .....
            {(this.state.loading) ?  data_spiner() : this.data_profile_res()}
        </div>;
    }
}

export default Data_profile;