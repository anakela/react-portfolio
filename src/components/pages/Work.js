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
import '../../styles/root.css';

export default function Work() {
    return (
        <div className='main-container'>
            <h2>My Work</h2>
            <Grid container spacing={4} style={{ justifyContent: "center" }}>
                {/* <Paper elevation={3} sx={{ padding: 1, marginTop: 3, justifyContent: "center" }}> */}
                <Grid item
                    md={12}
                >
                    <Card
                        variant="outlined"
                        className="card"
                        sx={{ minWidth: 345, maxWidth: '100%', borderRadius: '10px', width: '100%' }}
                        style={{ border: "5px solid var(--dark-purp)" }}
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
                                    <h3>Bone Buddies by Team Turcrickeseal</h3>
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
                        variant="outlined"
                        className="card"
                        sx={{ minWidth: 345, borderRadius: '10px', width: '100%' }}
                        style={{ border: "5px solid var(--dark-purp)" }}
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
                                    <h3>Freakimono by Team NaNarwhal</h3>
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
                        sx={{ minWidth: 345, borderRadius: '10px', width: '100%' }}
                        style={{ border: "5px solid var(--dark-purp)" }}
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
                                    <h3>NaNarWORD Game by Team NaNarwhal</h3>
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
                        sx={{ minWidth: 345, borderRadius: '10px', width: '100%' }}
                        style={{ border: "5px solid var(--dark-purp)" }}
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
                                    <h3>NoSQL Social Network API</h3>
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
                        sx={{ minWidth: 345, borderRadius: '10px', width: '100%' }}
                        style={{ border: "5px solid var(--dark-purp)" }}
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
                                    <h3>MVC Tech Blog</h3>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* </Paper> */}
            </Grid>
        </div>
    );
}