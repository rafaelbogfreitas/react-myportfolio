import React from 'react';

import Skill from '../Skill/Skill';

import './SkillsBox.scss';

const SkillsBox = (props) => 
    
    <div className="skills-box">
        {props.state.map((a, i) => <Skill key={i} {...a} onClick={(e) => props.openAccordeon(e)} id={a.title} open={a.open}/>)}
    </div>

export default SkillsBox;