import React from 'react'; 
import Table_gambar from '../components/Table_gambar';
import {  Table } from 'react-bootstrap';
const List_cucian_grid= props => {
  let dataCucian = props.cucian; 
  const gambar =  dataCucian.map(value =>{            
    return <Table_gambar key={value.id} value={value}/>;
  });

 return <div className="image-list">Data Cucian
 <Table striped bordered hover>
  <thead>
    <tr> 
      <th>No Order</th>
      <th>Pesan </th>
      <th>jenis_layanan_desc</th>
      <th>layanan kurir </th>
    </tr>
  </thead>
  <tbody>
    {gambar}
  </tbody> 
  </Table>
  </div>;
}

export default List_cucian_grid;
 