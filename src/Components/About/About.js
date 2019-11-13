import React from 'react';

import Skills from '../Skills/Skills';
import AboutContent from '../../util/AboutContent';

import './About.scss';

 const About = ({skillsClicked, skillsState, openAccordeon, closeLayer}) =>
    <div className="about">
        <div className={window.innerWidth <= 600 ? "about-wrap animated fadeInUp" : "about-wrap animated fadeIn"}>
        <h1>About</h1>
            {AboutContent.map((a, i) => <p key={i}>{a}</p>)}
        </div>
        <Skills skillsClicked={skillsClicked} skillsState={skillsState} openAccordeon={openAccordeon} closeLayer={closeLayer}/>
    </div>;
        
 
export default About;