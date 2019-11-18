import React from 'react';

import SkillsArrow from '../SkillsArrow/SkillsArrow';
import './SkillsTitle.scss';


const SkillsTitle = ({open, onClick, title, id, style}) => 
    <h2  style={style} className={ open ? "skills-title open-section" : "skills-title" } onClick={onClick} id={id} >
        <div className="text">{ title }</div>
        <SkillsArrow open={open}/>
    </h2>


export default SkillsTitle;