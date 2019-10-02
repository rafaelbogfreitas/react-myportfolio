import React from 'react';

import Form from '../Form/Form';
import Icons from '../Icons/Icons';

import IconsContent from '../../util/IconsContent';

import './Contact.scss';

const Contact = () =>
    <div className="contact">
        <div className="info-wrap">
            <div className="info-container">
                <h1>Get In Touch!</h1>
                <p>I will be very happy to meet with you, have a cup of coffee,
                tell you about me and share my experience. Thanks for visiting! </p>
            </div>
            <div className="icons-container">
                {IconsContent.map((a,i) => <Icons key={i} content={a} />)}
            </div>
        </div>
        <Form />
    </div>;
 
export default Contact;