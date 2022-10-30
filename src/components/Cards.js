import React from 'react';
import Card from '@mui/joy/Card';
import { CardMedia, Grid } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
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
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
};