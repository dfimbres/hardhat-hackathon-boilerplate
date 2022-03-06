import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function BasicTextFields() {
  return (
      <>
      <div className = "center">
        <div>
            <TextField style={{marginRight: '15px'}}id="filled-basic" label="First Name" variant="filled" />
            <TextField style={{ marginBottom: '15px'}}id="filled-basic" label="Last Name" variant="filled" />
        </div>
        <TextField style={{width: "400px"}} id="filled-basic" label="Recipient Address (Public Key)" variant="filled" />
        <Button style={{marginTop: "20px"}} className="center" variant="contained">Add Recipient</Button>

      </div>
    
    </>
  );
}