import React from 'react'; 
import { Form ,Button , Breadcrumb , FormGroup,FormControl,FormLabel} from 'react-bootstrap';
class Form_Profile extends React.Component {
    constructor(props) {
      super(props);
         this.state = {
           last_name: '',
           first_name : '',
           phone : ''
        };
    }  
    handleChange = event => {
     
      this.setState({
        [event.target.id]: event.target.value
      });
      
    }
  
    handleSubmit = async event => {
      
      event.preventDefault();
      console.log(this.state); 
    }
    validateForm() {
      return this.state.last_name.length > 0 && this.state.first_name.length > 0
      && this.state.phone.length > 0;
    }
    render() {
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