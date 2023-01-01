import React from 'react';
import Card from '@mui/joy/Card';
import { CardMedia, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import '../styles/root.css';

export default function ProjectCard({ title, github, deployedSite, image, description }) {
    console.log(typeof title, typeof github, typeof image);
    return (
        <Grid item md={6}>
            <Card
                variant="outlined"
                className="card"
                sx={{ minWidth: 345, borderRadius: '10px', width: '100%' }}
                style={{ border: "5px solid var(--dark-purp)" }}
            >
                <CardActionArea
                    href={github}
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h3>{title}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <CardActions>
                            <CardActionArea
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='card-btn'
                            >
                                <Button
                                    style={{ textAlign: "center", backgroundColor: "#000", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif", margin: "10px", padding: "10px" }}
                                >
                                    GitHub Repo
                                </Button>
                            </CardActionArea>
                            <CardActionArea
                                href={deployedSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='card-btn'
                            >
                                <Button
                                    style={{ textAlign: "center", backgroundColor: "#000", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif", margin: "10px", padding: "10px" }}
                                >
                                    Deployed Site
                                </Button>
                            </CardActionArea>
                        </CardActions>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
};