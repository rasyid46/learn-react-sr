import React, {Component} from 'react'; 
import {  Pagination  } from 'react-bootstrap';
import { unsplash , data_spiner} from '../api/JWTAuth';
import Listcuciangrid from '../components/List_cucian_grid'; 
class DataCucian extends  Component{

    state = { cucian: [] , total : "" ,loading : true , page : 1 , last_page : "", next_page_url : "", prev_page_url : ""};

    componentDidMount() {
        this._loadinitiate();
    }

    _loadinitiate = async (term) => {
     const page = this.state.page;
     const response  = await unsplash.get('pengajuan/byuser?page='+page);
     const dataRes = response.data.data;
     console.log(dataRes);     
     this.setState({ cucian : response.data.data.data , total : response.data.data.total, loading : false , last_page : dataRes.last_page});
   }

    _gamtijumlah = async (event) =>{
     
      await this.setState({
        loading : true,
        page : 2
      });
      this._loadinitiate();
    } 

    pageselect = async (index) => { 
      await this.setState({
        loading : true,
        page : index
      });
      this._loadinitiate();
    }

    _pageButton(){
      var ind;
      for (ind = 0;  ind < 3 ; ind ++){
        return(
          <Pagination.Item onClick={(e) => this.pageselect(1, e)} >1000</Pagination.Item>
        );
      }
    }

    _dataButtonPage(){
      return <div> xx {this._pageButton()} </div>;
    }
    data_cucian_respon(){
    
      const items = []
      var i;
      var last_page = this.state.last_page;
      for (i = 1; i <= last_page; i++) { 
        // const active = (this.state.page == 1) ? "active" : "";
        items.push(<Pagination.Item 
          onClick={(e) => this.pageselect({i}, e)} key={i}>{i}   </Pagination.Item>)
      }
      return <div className="ui container"> 
      

     
     
      <h2>Jumlah : {this.state.total}  </h2>
        <Listcuciangrid cucian ={this.state.cucian} />

        <Pagination>
            {items}
        </Pagination>
    
    
    
    </div>;
    }

    
   render(){
     return <div className="ui container"> 
            DataCucian

            { (this.state.loading) ? 
             data_spiner()
                    : this.data_cucian_respon()
        }

          </div>
         ;
     
   }
}

export default DataCucian;