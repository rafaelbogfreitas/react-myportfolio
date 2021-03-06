import React from 'react';

import Form from './Form/Form';
import IconsBox from '../IconsBox/IconsBox';

import './Contact.scss';

const Contact = () =>
    <div className="contact">
        <h1>Get In Touch!</h1>
        <div className={window.innerWidth <= 400 ? "info-wrap animated fadeIn":"info-wrap"}>
            <div className="info-container">
                <p>I will be very happy to meet with you, have a cup of coffee,
                tell you about me and share my experience.</p>
                <p>Thanks for visiting!</p>
                <IconsBox />
            </div>
            <Form />
        </div>
    </div>;
 
export default Contact;