import React from 'react';

import Form from './Form/Form';
import IconsBox from '../IconsBox/IconsBox';
import Whats from './Whats/Whats';

import './Contact.scss';

const Contact = ({lang}) =>
    <div className="contact">
        { lang ? <h1>Entre em contato!</h1> : <h1>Get In Touch!</h1>}
        <div className={window.innerWidth <= 400 ? "info-wrap animated fadeIn":"info-wrap"}>
            <div className="info-container">
            {
                lang ?
                (<div>
                    <p>Vamos nos encontrar! Será um prazer conversar e contar mais sobre mim e minha história.</p>
                    <p>Obrigado pela visita!</p> 
                </div>):
                (<div>
                    <p>I will be very happy to meet with you, have a cup of coffee,
                    tell you about me and share my experience.</p>
                    <p>Thanks for visiting!</p>
                </div>)
            }
                <IconsBox />
            </div>
            {
                lang ? <Whats /> : <Form />
            }
        </div>
    </div>;
 
export default Contact;