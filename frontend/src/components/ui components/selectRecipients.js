import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../styles.css'
import HeaderSignedIn from '../ui components/header-signed-in'
import TextField from '@mui/material/TextField';
import AddRecipient from '../ui components/addRecipient.js'

const columns = [
  { field: 'id', headerName: '#', width: 55 },
  { field: 'Name', headerName: 'Name', width: 190 },
  { field: 'Address', headerName: 'address', width: 2000 },
];

const rows = [
  { id: 1, Address: 'asdfasdfasdfasdfasdf234234asfd', },

];

export default function DataTable() {
  return (
      <>
      <HeaderSignedIn/>
      <h1 style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '15px'}}>Select Recipients </h1>
      <AddRecipient/>
    <div className = "center" style={{ height: 400, width: '60%' }}>
      <DataGrid
      style={{marginTop: '50px'}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}
