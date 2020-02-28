import React from 'react';

import Skill from '../Skill/Skill';

import './SkillsBox.scss';

const SkillsBox = ({skillsState, openAccordeon, lang}) => 
    
    <div className="skills-box animated fadeInUp">
        {
            skillsState.map((a, i) => 
            <Skill 
                key={i} 
                {...a} 
                onClick={(e) => openAccordeon(e)} id={a.title} open={a.open}
                lang={lang}
            />)
        }
    </div>

export default SkillsBox;