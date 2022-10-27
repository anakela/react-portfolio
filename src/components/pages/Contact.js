import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';

import Email from '../images/logos/email-icon.png';
import LinkedIn from '../images/logos/li-icon.png';
import GitHub from '../images/logos/gh-icon.png';
import DA from '../images/logos/da-icon.png';

export default function Contact() {
    // const [formErrors, setFormErrors] = React.useState({
    //     name: false,
    //     email: false,
    //     message: false,
    // });

    // const [errorMessages, setErrorMessages] = React.useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });

    // const [isSubmit, setIsSubmit] = React.useState(false);
    // const [contactFormData, setContactFormData] = React.useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });

    // const handleInputChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     setFormErrors({
    //         ...formErrors,
    //         [name]: false,
    //     });
    //     setErrorMessages({
    //         ...errorMessages,
    //         [name]: false,
    //     });
    // };

    // const checkEmail = (email) => {
    //     const emailErrors = {
    //         email: false,
    //         emailMessage: false,
    //     }

    //     const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    //     if (!email) {
    //         emailErrors.emailMessage = "Email is required."
    //     } else if (!regexEmail.test(email)) {
    //         emailErrors.emailMessage = "Please enter a valid email address."
    //     }
    //     return emailErrors;
    // };

    // const validate = (values) => {
    //     const passErrors = {};
    //     const newFormErrors = {};

    //     const checkEmailErrors = checkEmail(values.email);
    //     newFormErrors.email = checkEmailErrors.email;

    //     if (checkEmailErrors.emailMessage) passErrors.email = checkEmailErrors.emailMessage;

    //     if (!values.name) {
    //         newFormErrors.name = true;
    //         passErrors.name = "Please enter your name."
    //     }
    //     if (!values.email) {
    //         newFormErrors.email = true;
    //         passErrors.email = "Please enter your email address."
    //     }
    //     if (!values.message) {
    //         newFormErrors.message = true;
    //         passErrors.message = "Please enter a message."
    //     }
    //     setFormErrors({...newFormErrors});
    //     setErrorMessages({...errorMessages, ...passErrors});
    //     return passErrors;
    // };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     validate(contactFormData);
    //     setIsSubmit(true);
    // };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('resume_contact', 'resume_contact', form.current, '8P-bozAqzxfeeNnd0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='main-container'>
            <h2 id="contact-header">Get in Touch</h2>
            <p>
                I love connecting with people!  Please feel free to reach out to me using any of the means below.
            </p>
            <Container maxWidth="lg">
                <div id="contact-img">
                    <a href="mailto:angie@anakela.com" title="Send me a message!" target="_blank" rel="noopener noreferrer"><img id="email" src={Email} alt="Email me!" /></a>
                    <a href="https://www.linkedin.com/in/anakela/" title="View my LinkedIn profile!" target="_blank" rel="noopener noreferrer"><img id="linked-in" src={LinkedIn} alt="Connect with me on LinkedIn!" /></a>
                    <a href="https://github.com/anakela" title="Check me out on GitHub!" target="_blank" rel="noopener noreferrer"><img id="github" src={GitHub} alt="Look me up on GitHub!" /></a>
                    <a href="https://www.deviantart.com/red-rogue-angel" title="Check out my earlier works of art here!" target="_blank" rel="noopener noreferrer"><img id="dev-art" src={DA} alt="Check out my art at DA!" /></a>
                </div>
                <h3>Send Me a Message</h3>
                <p>Complete the form below to send me an email.</p>
                <Paper elevation={3} sx={{ padding: 1, marginTop: 3 }}>

                    <Box
                        // component="form"
                        sx={{
                            "& > :not(style)": { width: "100%" },
                            maxWidth: '100%',
                        }}
                    // noValidate
                    // autoComplete="off"
                    >
                        <form ref={form} onSubmit={sendEmail} id="contact-form">
                            <TextField
                                sx={{ my: 1 }}
                                required
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                type="text"
                                name="user_name"
                            />
                            <TextField
                                sx={{ my: 1 }}
                                required
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type="email"
                                name="user_email"
                                inputMode='email'
                            // onChange={handleInputChange}
                            // helperText={errorMessages.email}
                            // value={contactFormData.email}
                            // error={formErrors.email}
                            />
                            <TextField
                                sx={{ my: 1 }}
                                required
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                                name="message"
                                rows={4}
                            // onChange={handleInputChange}
                            // helperText={errorMessages.message}
                            // value={contactFormData.message}
                            // error={formErrors.message}
                            />
                            <input type="submit" value="Send Email" id="contact-btn" />
                        </form>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}