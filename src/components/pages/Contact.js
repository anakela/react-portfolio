import * as React from 'react';
// import Phone from '../images/logos/phone-icon.png';
import Email from '../images/logos/email-icon.png';
import LinkedIn from '../images/logos/li-icon.png';
import GitHub from '../images/logos/gh-icon.png';
import DA from '../images/logos/da-icon.png';

export default function Contact() {
    return (
        <div className='main-container'>
            <h2>Get in Touch</h2>
            <p>
                I love connecting with people!  Please feel free to reach out to me using any of the means below.
            </p>
            <div>
                {/* <a href="tel:8086518336" title="Call me!" target="_blank" rel="noopener noreferrer"><img id="phone" src={Phone} alt="Call me!" /></a> */}
                <a href="mailto:angie@anakela.com" title="Send me a message!" target="_blank" rel="noopener noreferrer"><img id="email" src={Email} alt="Email me!" /></a>
                <a href="https://www.linkedin.com/in/anakela/" title="View my LinkedIn profile!" target="_blank" rel="noopener noreferrer"><img id="linked-in" src={LinkedIn} alt="Connect with me on LinkedIn!" /></a>
                <a href="https://github.com/anakela" title="Check me out on GitHub!" target="_blank" rel="noopener noreferrer"><img id="github" src={GitHub} alt="Look me up on GitHub!" /></a>
                <a href="https://www.deviantart.com/red-rogue-angel" title="Check out my earlier works of art here!" target="_blank" rel="noopener noreferrer"><img id="dev-art" src={DA} alt="Check out my art at DA!" /></a>
            </div>
        </div>
    );
}