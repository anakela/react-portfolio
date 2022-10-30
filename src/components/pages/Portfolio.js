import * as React from 'react';
import { Grid } from '@mui/material';
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