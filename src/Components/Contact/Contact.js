import React from 'react';

import Form from '../Form/Form';
import Icons from '../Icons/Icons';

import IconsContent from '../../util/IconsContent';

import './Contact.scss';

const Contact = () =>
    <div className="contact">
        <h1>Get In Touch!</h1>
        <div className="info-wrap">
            <div className="info-container">
                <p>I will be very happy to meet with you, have a cup of coffee,
                tell you about me and share my experience.</p>
                <p>Thanks for visiting!</p>
                <div className="icons-container">
                    {IconsContent.map((a,i) => <Icons key={i} content={a} />)}
                </div>
            </div>
            <Form />
        </div>
    </div>;
 
export default Contact;