import React from 'react'; 
import Tablegambar from '../components/Table_gambar';
import {  Table } from 'react-bootstrap';
const Listcuciangrid= props => {
  let dataCucian = props.cucian; 
  const gambar =  dataCucian.map(value =>{            
    return <Tablegambar key={value.id} value={value}/>;
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

export default Listcuciangrid;
 