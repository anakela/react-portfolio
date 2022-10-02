import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ position: 'absolute', width: '100%', bottom: 0 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="About Me"
                value="about"
                // to="/about"
                onClick={'About'}
                icon={<InfoOutlinedIcon />}
            />
            <BottomNavigationAction
                label="Work"
                value="work"
                icon={<ComputerOutlinedIcon />}
            />
            <BottomNavigationAction
                label="Contact Me"
                value="contact"
                icon={<ConnectWithoutContactOutlinedIcon />}
            />
            <BottomNavigationAction
                label="Resume"
                value="resume"
                icon={<DescriptionOutlinedIcon />}
            />
        </BottomNavigation>
    );
}


// export default function Footer() {
//     return (
//         <div>
//             <p>&copy; Angela Soto | Image Credits</p>
//         </div>
//     );

// };