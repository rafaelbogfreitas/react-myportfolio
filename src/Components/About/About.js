import React, { Component } from 'react';

import Skills from '../Skills/Skills';
import AboutContent from '../../util/AboutContent';

import './About.scss';

class About extends Component {
    render() { 
        return ( 
            <div className="about">
                <div className="about-wrap">
                    <h1>About</h1>
                    {AboutContent.map((a, i) => <p key={i}>{a}</p>)}
                </div>
                <Skills />
            </div>
        );
    }
}
 
export default About;