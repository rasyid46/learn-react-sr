import React from 'react'; 
class Table_gambar extends React.Component{
 
    render(){
        const {created_at_date , no_order , jenis_layanan_desc , layanan_kurir_desc} = this.props.value
        return(
        <tr>
            <td>{no_order}</td>
            <td> {created_at_date}</td>
            <td> {jenis_layanan_desc}</td>
            <td>{layanan_kurir_desc}</td>
        </tr>                
        );
    }
}

export default Table_gambar;