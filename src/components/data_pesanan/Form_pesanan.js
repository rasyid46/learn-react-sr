import React from 'react'; 
import { Form ,Button , Breadcrumb , FormGroup,FormControl,FormLabel} from 'react-bootstrap';

import {UpdateStore, data_spiner,UpdateProfilePOst} from '../../api/JWTAuth';
class Form_pesanan extends React.Component {
    constructor(props) {
      super(props);
      const  userLogin =  localStorage.getItem('userLogin');
      const dataU = JSON.parse(userLogin);
 
  
         this.state = {
            nama: "",
            alamat : "",
            type_cucian : "",
            jenis_layanan : "",
            layanan_kurir : "",
            no_telp : "",
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
        nama: this.state.nama,
        alamat:this.state.alamat  ,
        type_cucian:this.state.type_cucian   ,
        jenis_layanan:this.state.jenis_layanan    ,
         layanan_kurir:this.state.layanan_kurir ,
         no_telp : this.state.no_telp          
      }
      let response  =  await  UpdateStore(data);
      if(response.code==200){ 
        this.setState({
            loading : false , 
            nama: "",
            alamat : "",
            type_cucian : "",
            jenis_layanan : "",
            layanan_kurir : "",
            no_telp : "",
        });
        alert(response.descriptions);
         
     } 
    }
    validateForm() {
      return this.state.nama.length > 0 && this.state.alamat.length > 0
      && this.state.type_cucian.length > 0 && this.state.jenis_layanan.length > 0
      && this.state.layanan_kurir.length > 0 && this.state.no_telp.length > 0
      && this.state.no_telp.length > 0;
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
        
          <FormGroup controlId="nama"  >
            <FormLabel>Name</FormLabel>
            <FormControl
             
              type="text"
              value={this.state.nama}
              onChange={this.handleChange}
            />
          </FormGroup>


          <FormGroup controlId="no_telp"  >
            <FormLabel>No Telp</FormLabel>
            <FormControl
             
              type="text"
              value={this.state.no_telp}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="alamat"  >
            <FormLabel>alamat</FormLabel>
            <FormControl
              
              type="text"
              value={this.state.alamat}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="type_cucian"  >
            <FormLabel>Tipe cucian </FormLabel>
            <FormControl
              
              type="text"
              value={this.state.type_cucian}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="jenis_layanan"  >
            <FormLabel>Jenis Layanan </FormLabel>
            <FormControl
              
              type="text"
              value={this.state.jenis_layanan}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="layanan_kurir"  >
            <FormLabel>Layanan Kurir </FormLabel>
            <FormControl
              
              type="text"
              value={this.state.layanan_kurir}
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
  export default Form_pesanan;