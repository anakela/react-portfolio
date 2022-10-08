import * as React from 'react';
import Card from '@mui/joy/Card';
import { CardMedia, Grid, Paper } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import NaNarWord from '../images/projects/nanarwhal-1200px.jpg';
import Freakimono from '../images/projects/freakimono.jpg';
import NoSQL from '../images/projects/nosql.png';
import Blog from '../images/projects/mvc-tech-blog.png';
import BoneBuddies from '../images/projects/bone-buddies-logo.png';

export default function Work() {
    return (
        <div className='main-container'>
            <Grid container spacing={5} style={{ justifyContent: "center" }}>
                <Paper elevation={3} sx={{ padding: 1, marginTop: 3 }}>

                    <Grid item
                        md={12}
                    >
                        <h2>My Work</h2>
                        <Card
                            className="card"
                            sx={{ minWidth: 345, maxWidth: '100%', borderRadius: '10px', width: '100%' }}
                        >
                            <CardActionArea
                                href="https://dev-bone-buddies.herokuapp.com/"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={BoneBuddies}
                                    alt="Bone Buddies by Team Turcrickeseal"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bone Buddies by Team Turcrickeseal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card
                            className="card"
                            sx={{ minWidth: 345, margin: 3 }}
                        >
                            <CardActionArea
                                href="https://github.com/Team-Narwhal/My_Pet"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Freakimono}
                                    alt="Freakimono by Team NaNarwhal"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Freakimono by Team NaNarwhal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card
                            className="card"
                            sx={{ minWidth: 345, margin: 3 }}
                        >
                            <CardActionArea
                                href="https://github.com/NaNifer/NaNarWord-word-game"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={NaNarWord}
                                    alt="NaNarWORD Game by Team NaNarwhal"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        NaNarWORD Game by Team NaNarwhal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card className="card"
                            sx={{ minWidth: 345, margin: 3 }}
                        >
                            <CardActionArea
                                href="https://github.com/anakela/nosql-social-network-api"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={NoSQL}
                                    alt="NoSQL Social Network API"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        NoSQL Social Network API
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card className="card"
                            sx={{ minWidth: 345, margin: 3 }}
                        >
                            <CardActionArea
                                href="https://github.com/anakela/mvc-tech-blog"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Blog}
                                    alt="MVC Tech Blog"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        MVC Tech Blog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

// https://github.com/anakela/mvc-tech-blog

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