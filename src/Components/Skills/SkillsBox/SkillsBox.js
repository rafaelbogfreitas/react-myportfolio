import React from 'react';

import Skill from '../Skill/Skill';

import './SkillsBox.scss';

const SkillsBox = ({skillsState, openAccordeon}) => 
    
    <div className="skills-box animated fadeInUp">
        {skillsState.map((a, i) => <Skill key={i} {...a} onClick={(e) => openAccordeon(e)} id={a.title} open={a.open}/>)}
    </div>

export default SkillsBox;