import * as React from 'react';
// import Card from '@mui/joy/Card';
import { Grid } from '@mui/material';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import NaNarWord from '../images/projects/nanarwhal-1200px.jpg';
// import Freakimono from '../images/projects/freakimono.jpg';
// import NoSQL from '../images/projects/nosql.png';
// import Blog from '../images/projects/mvc-tech-blog.png';
// import BoneBuddies from '../images/projects/bone-buddies-logo.png';
import '../../styles/root.css';
import ProjectCard from '../Cards';
import { projects } from '../../projectData/projectData';

export default function Work() {
    console.log(projects);
    return (
        <div className='main-container'>
            <h2 id="work-header">My Work</h2>
            <div id="project-card-container">
                <Grid container spacing={{ xs: 4, md: 3 }} style={{ justifyContent: "center" }}>
                    {
                        projects.map((project, index) => {
                            return (<ProjectCard
                                key={index}
                                title={project.title}
                                github={project.github}
                                deployedSite={project.deployedSite}
                                image={project.image}
                                description={project.description}
                            />)
                        })
                    }
                </Grid>
            </div>
        </div>
    );
}