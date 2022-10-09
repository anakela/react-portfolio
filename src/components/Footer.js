import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

import Email from './images/logos/email-icon.png';
import LinkedIn from './images/logos/li-icon.png';
import GitHub from './images/logos/gh-icon.png';
import DA from './images/logos/da-icon.png';

const StyledFab = styled(Fab)({
  position: 'absolute',
  // zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Paper square sx={{ pb: '50px' }}> */}
      {/* <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography> */}
      {/* <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List> */}
      {/* </Paper> */}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, marginTop: "50px" }}>
        <Toolbar id="footer">
          {/* <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab> */}
          <Box sx={{ flexGrow: 1 }} style={{ display: "flex", justifyContent: "center" }} flexDirection="column">
            <div id="contact-img">
              <a href="mailto:angie@anakela.com" title="Send me a message!" target="_blank" rel="noopener noreferrer"><img id="email" src={Email} alt="Email me!" /></a>
              <a href="https://www.linkedin.com/in/anakela/" title="View my LinkedIn profile!" target="_blank" rel="noopener noreferrer"><img id="linked-in" src={LinkedIn} alt="Connect with me on LinkedIn!" /></a>
              <a href="https://github.com/anakela" title="Check me out on GitHub!" target="_blank" rel="noopener noreferrer"><img id="github" src={GitHub} alt="Look me up on GitHub!" /></a>
              <a href="https://www.deviantart.com/red-rogue-angel" title="Check out my earlier works of art here!" target="_blank" rel="noopener noreferrer"><img id="dev-art" src={DA} alt="Check out my art at DA!" /></a>
            </div>
            <p>Angela Soto &copy; 2022</p>
          </Box>
          {/* <IconButton color="inherit">
            <SearchIcon />
          </IconButton> */}
          {/* <IconButton color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}




// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
// import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

// export default function Footer() {
//     const [value, setValue] = React.useState('recents');

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <BottomNavigation sx={{ position: 'fixed', width: '100%', bottom: 0 }} value={value} onChange={handleChange}>
//             <BottomNavigationAction
//                 label="About Me"
//                 value="about"
//                 // to="/about"
//                 onClick={'About'}
//                 icon={<InfoOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 label="Work"
//                 value="work"
//                 icon={<ComputerOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 label="Contact Me"
//                 value="contact"
//                 icon={<ConnectWithoutContactOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 label="Resume"
//                 value="resume"
//                 icon={<DescriptionOutlinedIcon />}
//             />
//         </BottomNavigation>
//     );
// }


// export default function Footer() {
//     return (
//         <div>
//             <p>&copy; Angela Soto | Image Credits</p>
//         </div>
//     );

// };