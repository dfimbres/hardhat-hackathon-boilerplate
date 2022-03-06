import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LocalActivityIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </LocalActivityIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NFTicket
          </Typography>
          <Link to="/expenses">Expenses</Link>

          <Button style = {{marginRight: '5px', color: '#007bff', backgroundColor: "white"}} variant="contained" >Create an Event</Button>
          <Button style = {{marginRight: '5px'}} variant="contained"> My Events </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
