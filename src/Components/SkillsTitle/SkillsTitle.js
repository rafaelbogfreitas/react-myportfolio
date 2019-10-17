import React from 'react';

import SkillsArrow from '../SkillsArrow/SkillsArrow';
import './SkillsTitle.scss';


const SkillsTitle = (props) => 
    <h2 className={ props.open ? "skills-title open-section" : "skills-title" } onClick={props.onClick} id={props.id} >
        <div className="text">{ props.title }</div>
        <SkillsArrow open={props.open}/>
    </h2>


export default SkillsTitle;