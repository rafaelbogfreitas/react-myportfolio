import React from 'react';

import '../About/About.scss';
import './Skills.scss';

import SkillsBox from './SkillsBox/SkillsBox';
// import SkillsExpandBtn from '../SkillsExpandBtn/SkillsExpandBtn';

const Skills = ({skillsClicked, skillsState, openAccordeon, closeLayer}) => 

    <aside className={skillsClicked ? 'skills on-focus' : 'skills'}>
        <div className={skillsClicked ? 'layer-closer' : 'hidden'} onClick={(e) => closeLayer(e)}>X</div>
        <SkillsBox skillsState={skillsState} openAccordeon={openAccordeon}/>
    </aside>

 
export default Skills;