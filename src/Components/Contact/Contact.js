import React, { Component } from 'react';

import Form from '../Form/Form';

import './Contact.scss';

class Contact extends Component {
    render() { 
        return ( 
            <div className="contact">
                <div className="info-wrap">

                    <div className="info-container">
                        <h1>Get In Touch!</h1>
                        <p>I will be very happy to meet with you, have a cup of coffee,
                        tell you about me and share my experience. Thanks for visiting! </p>
                    </div>


                    <div className="icons-container">
                        <a href="mailto:rafaelbogfreitas@gmail.com">
                        <i className="fas fa-envelope-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rafael-borges-de-oliveira-gouveia-e-freitas-49b04016a/" target="_blank" rel='noreferrer noopener'>
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/rafaelbogfreitas" target="_blank" rel='noreferrer noopener'>
                        <i className="fas fa-code-branch"></i>
                        </a>
                        <a href="https://twitter.com/RafaelF03113877" target="_blank" rel='noreferrer noopener'>
                        <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="https://www.freecodecamp.org/rafaelborges" target="_blank" rel='noreferrer noopener'>
                        <i className="fab fa-free-code-camp"></i>
                        </a>
                    </div>

                </div>

                <Form />

            </div>

        );
    }
}
 
export default Contact;