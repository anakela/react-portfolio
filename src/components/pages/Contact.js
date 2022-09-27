// import { da, phone } from '../images/logos';

export default function Contact() {
    return (
        <div>
            <h2>Get in Touch</h2>
            <p>
                I love connecting with people!  Please feel free to reach out to me using any of the means below.
            </p>
            <div>
                <a href="tel:8086518336" title="Call me!" target="_blank"><img id="phone" src="" alt="Call me!" /></a>
                <a href="mailto:angie@anakela.com" title="Send me a message!" target="_blank"><img id="email" src="./assets/images/email-icon.png" alt="Email me!" /></a>
                <a href="https://www.linkedin.com/in/anakela/" title="View my LinkedIn profile!" target="_blank"><img id="linked-in" src="./assets/images/li-icon.png" alt="Connect with me on LinkedIn!" /></a>
                <a href="https://github.com/anakela" title="Check me out on GitHub!" target="_blank"><img id="github" src="./assets/images/gh-icon.png" alt="Look me up on GitHub!" /></a>
                <a href="https://www.deviantart.com/red-rogue-angel" title="Check out my earlier works of art here!" target="_blank"><img id="dev-art" src="./assets/images/da-icon.png" alt="Check out my art at DA!" /></a>
            </div>
        </div>
    );
}