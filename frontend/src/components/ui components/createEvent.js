import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import HeaderSignedIn from '../ui components/header-signed-in'
import '../../styles.css'
import Stack from '@mui/material/Stack';
import DateTimePicker from '@mui/lab/DateTimePicker';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
    const navigate = useNavigate();

    function handleConfirmation() {
        alert('Event Minted')
    }

    const [eventDate, setEventDate] = React.useState(new Date());
    const [eventName, setEventName] = React.useState()
    const [ticketQty, setTicketQty] = React.useState()
    const [selectedDate, handleDateChange] = React.useState(new Date());

    console.log('Data Validation',  {"eventName": eventName}, {"eventDate": eventDate}, {"ticketQty": ticketQty} )

    const handleChange = (newValue) => {
        setEventDate(newValue);
      };


    return (
        <>
        <HeaderSignedIn/>
        <h1 style={{textAlign: 'center', paddingTop: '60px', paddingBottom: '15px'}}>Create a New Event</h1>
            <Box id="boxId" style ={{maxWidth: '75%'}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4} >
                        <Item className = "eventName">
                        <h3 style={{ textAlign: 'center', paddingTop: '10px', color: 'black'  }}>Event Name</h3>
                        <div style={{ paddingTop: '10px' }}>
                                <TextField value={eventName} onChange={(e) => setEventName(e.target.value)} id="outlined-basic" label="Event Title" variant="outlined" />
                        </div>
                        </Item>

                    </Grid>
                    <Grid item xs={4}>
                        <Item className="eventName">
                            <h3 style={{ textAlign: 'center', paddingTop: '10px', color: 'black' }}>Event Time</h3>
                            <div style={{ paddingTop: '10px' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <DateTimePicker
                                            label="Date & Time"
                                            value={eventDate}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>

                                {/* <TextField value={eventDate} onChange={(e) => setEventDate(e.target.value)} id="outlined-basic" label="Event Date" variant="outlined" /> */}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4} >
                        <Item className="eventName">
                            <h3 style={{ textAlign: 'center', paddingTop: '10px', color: 'black'  }}>Ticket Quantity</h3>
                            <div style={{ paddingTop: '10px' }}>
                                <TextField type= 'number' value={ticketQty} onChange={(e) => setTicketQty(e.target.value)} id="outlined-basic" label="#" variant="outlined" />
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <div style={{ textAlign: 'center', paddingTop: '25px' }}>
                <Button variant='outlined' onClick={handleConfirmation}>
                    Mint Event <ArrowForwardIosIcon style={{fontSize: '75%'}}/>
                </Button>
            </div>
        </>
    );
}