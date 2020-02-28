import React from 'react';

import Skills from '../Skills/Skills';
import AboutContent from '../../util/AboutContent';

import './About.scss';

 const About = ({skillsClicked, skillsState, openAccordeon, closeLayer, lang}) =>
    <div className="about">
        <div className={window.innerWidth <= 600 ? "about-wrap animated fadeInUp" : "about-wrap animated fadeIn"}>
        <h1>{ lang ? "Sobre" : "About" }</h1>
            {console.log(AboutContent)}
            {AboutContent.map((a, i) => lang ? <p key={i}>{a.ptbr}</p> : <p key={i}>{a.en}</p>)}
        </div>
        <Skills 
            skillsClicked={skillsClicked} 
            skillsState={skillsState} 
            openAccordeon={openAccordeon} 
            closeLayer={closeLayer}
            lang={lang}
        />
    </div>;
        
 
export default About;