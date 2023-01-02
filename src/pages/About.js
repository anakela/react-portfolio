import React from 'react';
import Angie from '../components/images/angie-370px.png';

export default function About() {
    return (
        <div className='main-container'>
            <h2 id="about-header">About Me</h2>
            <div
                style={{ display: 'flex', float: 'right', borderRadius: '50%' }}
            >
                <img
                    id="profilePhoto"
                    src={Angie}
                    alt="This is me!"
                    sx={{  borderRadius: '50%' }}
                />
            </div>
            <p>
                Oh, hello there! 👋 My name is Angela, but you can call me Angie. I'm a web designer/developer living in the Hawaiian islands. My goal is to create beautiful, functional, high-converting websites that are easy to use, highly navigable, and accessible to all.
            </p>
            <p>
                My journey toward web design and development began early. Growing up, I loved drawing, which I did all the time. In addition to art, I was also fascinated with technology. I loved gadgets and video games and understanding how they worked. When the Internet became widely available, I found that my technological allure extended to websites and how they were designed. I would spend hours designing layouts and breaking them down into HTML.
            </p>
            <p>
                Needless to say, my desire to combine art with technology led to:
            </p>
            <ul>
                <li>A BA in Art from Southern Oregon University</li>
                <li>A Master's in Web Design & Development from Southern New Hampshire University</li>
                <li>A Web Design & Development certification from Cornell</li>
                <li>Studying through UC Berkeley's Coding Bootcamp</li>
            </ul>
            <p>
                Take a look at my work, or contact me. I look forward to working with you!
            </p>
        </div>
    );
}