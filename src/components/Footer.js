import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';

import Email from './images/logos/email-icon.png';
import LinkedIn from './images/logos/li-icon.png';
import GitHub from './images/logos/gh-icon.png';
import DA from './images/logos/da-icon.png';

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, marginTop: "50px" }}>
        <Toolbar id="footer">
          <Box sx={{ flexGrow: 1 }} style={{ display: "flex", justifyContent: "center" }} flexDirection="column">
            <div id="footer-contact-img">
              <a href="mailto:angie@anakela.com" title="Send me a message!" target="_blank" rel="noopener noreferrer"><img id="email" src={Email} alt="Email me!" /></a>
              <a href="https://www.linkedin.com/in/anakela/" title="View my LinkedIn profile!" target="_blank" rel="noopener noreferrer"><img id="linked-in" src={LinkedIn} alt="Connect with me on LinkedIn!" /></a>
              <a href="https://github.com/anakela" title="Check me out on GitHub!" target="_blank" rel="noopener noreferrer"><img id="github" src={GitHub} alt="Look me up on GitHub!" /></a>
              <a href="https://www.deviantart.com/red-rogue-angel" title="Check out my earlier works of art here!" target="_blank" rel="noopener noreferrer"><img id="dev-art" src={DA} alt="Check out my art at DA!" /></a>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}