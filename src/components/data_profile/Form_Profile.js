import React from 'react'; 
import { Form ,Button , Breadcrumb , FormGroup,FormControl,FormLabel} from 'react-bootstrap';

import {UpdateProfilePOst, data_spiner} from '../../api/JWTAuth';
class Form_Profile extends React.Component {
    constructor(props) {
      super(props);
      const  userLogin =  localStorage.getItem('userLogin');
      const dataU = JSON.parse(userLogin);
      console.log('props');
      console.log(userLogin);
      console.log(dataU);
         this.state = {
           last_name: dataU.last_name,
           first_name : dataU.first_name,
           phone : dataU.phone,
           loading : false
        };
    }  
    handleChange = event => {
     
      this.setState({
        [event.target.id]: event.target.value
      });
      
    }
  
    handleSubmit = async event => {
      this.setState({loading : true});
      event.preventDefault();
      let data =    {
        first_name: this.state.first_name,
        last_name:this.state.last_name  ,
        phone:this.state.phone          
      }

      let response  = await UpdateProfilePOst(data);
      if(response.code==200){
         console.log(response);
         this.setState({loading : false});
      }

      console.log(this.state); 
    }
    validateForm() {
      return this.state.last_name.length > 0 && this.state.first_name.length > 0
      && this.state.phone.length > 0;
    }

    render(){
      return  <div>Data Profile .....
          {(this.state.loading) ?  data_spiner() : this._render()}
      </div>;
  }
    _render() {
      return (
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
        
          <FormGroup controlId="first_name"  >
            <FormLabel>First Name</FormLabel>
            <FormControl
             
              type="text"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="last_name"  >
            <FormLabel>last_name</FormLabel>
            <FormControl
              
              type="text"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="phone"  >
            <FormLabel>phone </FormLabel>
            <FormControl
              
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </FormGroup>

          
          <Button
            block
            
            disabled={!this.validateForm()}
            type="submit"
          > 
            Login
          </Button>
        </form>
      </div>
      );
    }
  }
  export default Form_Profile;