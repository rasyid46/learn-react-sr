import React, {Component} from 'react'; 
import {  Spinner  } from 'react-bootstrap';
import {list_cucian, unsplash , data_spiner} from '../api/JWTAuth';
import List_cucian_grid from '../components/List_cucian_grid';
class DataCucian extends  Component{

    state = { cucian: [] , total : "" ,loading : true};

    componentDidMount() {
        this._loadinitiate();
    }

    _loadinitiate = async (term) => {
     console.log('ibi');
     const response  = await unsplash.get('pengajuan/byuser');
      const dataC = JSON.stringify(response.data.data.data);
      this.setState({ cucian : response.data.data.data , total : response.data.data.total, loading : false });
   }

    _gamtijumlah = () =>{
       this.setState({ total : "zz" });
    } 

    

    data_cucian_respon(){
      return <div className="ui container"> 
      <button value="a" onClick={this._gamtijumlah}>OKe</button>
      <h2>Found : {this.state.total}  </h2>
        <List_cucian_grid cucian ={this.state.cucian} />
    </div>;
    }
   render(){
     return <div className="ui container"> 
            DataCucian

            {(this.state.loading) ? 
             data_spiner()
                    : this.data_cucian_respon()
        }

          </div>
         ;
     
   }
}

export default DataCucian;