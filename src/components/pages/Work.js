import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import NaNarWord from '../images/projects/nanarwhal-1200px.jpg';

export default function Work() {
  return (
    <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src={NaNarWord}
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Yosemite National Park
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          California, USA
        </Typography>
      </CardContent>
    </Card>
  );
}


// export default function Work() {
//     return (
//         <div>
//             <h2>My Work</h2>
//             <a
//                 href="https://nanifer.github.io/NaNarWord-word-game/"
//                 title="NaNarWORD Game by Team NaNarwhal"
//                 target="_blank">
//                 <div className="flex-container flex-1" id="project1">
//                     <h3>Project #1 - NaNarWORD Game by Team NaNarwhal</h3>
//                 </div>
//             </a>

//             <div className="proj-wrapper">
//                 <a href="https://github.com/anakela/homework-1" title="Homework 1 - HTML CSS Git Challenge: Code Refactor" target="_blank">
//                     <div className="flex-container flex-2" id="project2">
//                         <h3>#2 - HTML CSS Git Challenge: Code Refactor</h3>
//                     </div>
//                 </a>

//                 <a href="https://github.com/anakela/professional-portfolio" title="Homework 2 - Advanced CSS Challenge: Professional Portfolio" target="_blank">
//                     <div className="flex-container flex-3" id="project3">
//                         <h3>#3 - Advanced CSS Challenge: Professional Portfolio</h3>
//                     </div>
//                 </a>

//                 <a href="https://github.com/Team-Narwhal/My_Pet" title="Freakimono by Team NaNarwhal" target="_blank">
//                     <div className="flex-container flex-4" id="project4">
//                         <h3>#4 - Freakimono by Team NaNarwhal</h3>
//                     </div>
//                 </a>

//                 <a /*href="javascript:void(0);"*/ title="_self" target="_blank">
//                     <div className="flex-container flex-5" id="project5">
//                         <h3>#5 - Upcoming Project 5</h3>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     );
// }