import React from 'react';
import { Grid, Paper, styled } from '@mui/material';
import '../styles/root.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Resume() {
  return (
    <div className='main-container'>
      <h2 id="resume-header">Resume</h2>
      <h3>Angela Soto</h3>
      <p>Full-stack developer with a background in art and design.  Earned a full-stack web development certificate from UC Berkeley Web Development Bootcamp, and a web design and development certificate from Cornell University.  Strengths in design, teamwork, communication, and working with a team to develop projects from conception to completion.</p>

      <h4>Technical Skills</h4>

      <Grid container spacing={2}>
        <Grid item lg={3} md={3} xs={12}>
          <Item>
            <ul>
              <li>JavaScript ES6+</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>GitHub</li>
            </ul>
          </Item>
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          <Item>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
              <li>Handlebars</li>
            </ul>
          </Item>
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          <Item>
            <ul>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>API Interactions</li>
              <li>Naterial UI</li>
              <li>Materialize</li>
              <li>Figma</li>
            </ul>
          </Item>
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          <Item>
            <ul>
              <li>Adobe Creative Suite</li>
              <li>Confluence</li>
            </ul>
          </Item>
        </Grid>
      </Grid>

      <h4>Projects</h4>
      <p><b>Bone Buddies by Team Turcrickeseal</b> | GitHub Repo | Deployed Site</p>
      <ul>
        <li>Summary: An app for dog owners to find and interact with dog owners and dog playmates for their dogs.</li>
        <li>Role: Front-End Designer, Front-End Developer</li>
        <li>Tools: React, Redux Toolkit, Apollo Server/Client, Apollo Subscriptions, JWT, Express, MongoDB, Node, Heroku, Figma, Material UI, HTML, CSS, JavaScript, Socket IO, Dog Data API</li>
      </ul>
      <hr />
      <p><b>Freakimono by Team NaNarwhal</b> | GitHub Repo | Deployed Site</p>
      <ul>
        <li>Summary: A digital pet game where users can create and care for a digital pet of their choice. Pets can interact with one another via a battle system, thereby improving their health and wellbeing.</li>
        <li>Role: Front-End Designer, Front-End Developer, Artist</li>
        <li>Tools: Sequelize, MySQL, Handlebars, MVC, Express-Sessions & Cookies, Socket IO, Canvas, Bootstrap, Figma, HTML, CSS, JavaScript, Adobe Photoshop, Adobe Illustrator</li>
      </ul>
      <hr />
      <p><b>NaNarWord by Team NaNarwhal</b> | GitHub Repo | Deployed Site</p>
      <ul>
        <li>Summary: A word game we describe as Wordle’s quirky cousin who is partnered with Merriam-Webster so it’s smart and vivacious.</li>
        <li>Role: Front-End Designer, Front-End Developer, Artist</li>
        <li>Tools: Wordnick API, Merriam-Webster Dictionary API, Giphy API, HTML, CSS, JavaScript, jQuery, Materialize, Figma, Adobe Photoshop</li>
      </ul>

      <h4>Experience</h4>
      <p><b>Implementation Analyst - July 2022 to Present</b></p>
      <p><b>Kukui Holdings, LLC - Remote</b></p>
      <p>Client-facing and internal position requiring client feedback and collaboration with IT, Design, and Development teams to develop websites and customer retention management (CRM) for clients.</p>
      <p><b>Key Accomplishments:</b></p>
      <ul>
        <li>Guiding clients through the onboarding process and providing support while setting up CRM and new websites.</li>
        <li>Supporting onboarding teammates with internal troubleshooting, domain transfers, design change requests, and training.</li>
      </ul>
      <hr />
      <p><b>Senior Production Coordinator - April 2020 to July 2022</b></p>
      <p><b>Kukui Holdings, LLC - Remote</b></p>
      <p>Communicated with clients to complete onboarding, including assisting with website design, CRM set up, and assisting with management system integration.</p>
      <p><b>Key Accomplishments:</b></p>
      <ul>
        <li>Primary contact for clients, liaisoning between clients and the development team.</li>
        <li>Creating and updating documentation for the onboarding team.</li>
        <li>Updating and/or redesigning website designs in Figma.</li>
      </ul>

      <h4>Education</h4>
      <ul>
        <li><b>Certificate in Full-Stack Web Development</b> - Remote | University of California, Berkeley</li>
        <li><b>Certificate in Web Design & Development</b> - Remote | Cornell University</li>
        <li><b>Master of Science in IT with Concentration in Web Design/Development</b> - Remote | Southern New Hampshire University</li>
      </ul>
      <p></p>

      <p></p>

      <p></p>
    </div>
  );
}