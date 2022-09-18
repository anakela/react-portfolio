import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </div>
    );
};