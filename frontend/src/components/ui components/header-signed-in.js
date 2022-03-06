import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Link, useNavigate } from 'react-router-dom'

export default function ButtonAppBar() {
  const navigate = useNavigate()

  function handleCreateEvent() {
    navigate("/create-event")
  }

  function handlemyEvents() {
    navigate("/my-events")
  }


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
          <Link style={{color: 'white'}} to ="/">NFTicket</Link>
          </Typography>

          <Button onClick={handleCreateEvent} style = {{marginRight: '5px', color: '#007bff', backgroundColor: "white"}} variant="contained" >Create an Event</Button>
          <Button onClick={handlemyEvents} style = {{marginRight: '5px'}} variant="contained"> My Events </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
