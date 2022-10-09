import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

export default function Contact() {
    return (
        <div className='main-container'>
            <h2 id="contact-header">Get in Touch</h2>
            <p>
                I love connecting with people!  Please feel free to reach out to me using any of the means below.
            </p>

            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>


            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Name" color="secondary" focused />
                <TextField id="outlined-basic" label="Email" color="secondary" focused />
                <TextField id="outlined-basic" label="Message" rows={4} color="secondary" focused />
            </Box>

            
        </div>
    );
}