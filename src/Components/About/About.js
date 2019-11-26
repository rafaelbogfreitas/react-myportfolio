import React from 'react';

import Skills from '../Skills/Skills';
import AboutContent from '../../util/AboutContent';

import './About.scss';
import Curriculum from '../Curriculum/Curriculum';

 const About = () =>
    <div className="about">
        <div className={window.innerWidth <= 600 ? "about-wrap animated fadeInUp" : "about-wrap animated fadeIn"}>
        <h1>About</h1>
            <Curriculum />
            {AboutContent.map((a, i) => <p key={i}>{a}</p>)}
        </div>
        <Skills />
    </div>;
        
 
export default About;