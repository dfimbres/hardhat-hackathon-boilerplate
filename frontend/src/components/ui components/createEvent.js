import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DateTimePicker from './date-time'
import { Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
    const [eventDate, setEventDate] = React.useState(new Date('2000-10-02T00:00:00'));
    const [eventName, setEventName] = React.useState()
    const [ticketQty, setTicketQty] = React.useState()
    console.log('event date',  eventDate)


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4} >
                        <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>Event Name</h3>
                        <div style={{ paddingTop: '10px' }}>
                            <Item>
                                <TextField value={eventName} onChange={(e) => setEventName(e.target.value)} id="outlined-basic" label="Event Name" variant="outlined" />
                            </Item>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>Event Date</h3>
                        <Item style={{ paddingTop: '20px' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    label="Date Time picker"
                                    value={eventDate}
                                    onChange={(date) => {
                                        console.log('handle change fired')
                                        setEventDate(Date(date));
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>                    
                        </Item>
                    </Grid>
                    <Grid item xs={4} >
                        <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>Ticket Quantity</h3>
                        <div style={{ paddingTop: '10px' }}>
                            <Item>
                                <TextField value={ticketQty} onChange={(e) => setTicketQty(e.target.value)} type="number" id="outlined-basic" label="Ticket Quantity" variant="outlined" />
                            </Item>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <div style={{ textAlign: 'center', paddingTop: '25px' }}>
                <Button variant='outlined'>
                    Submit
                </Button>
            </div>
        </>
    );
}