import React from 'react';

import SkillsArrow from '../SkillsArrow/SkillsArrow';
import './SkillsTitle.scss';


const SkillsTitle = ({open, onClick, titlept, title, id, style, lang}) => 
    <h2  style={style} className={ open ? "skills-title open-section" : "skills-title" } onClick={onClick} id={id} >
        <div className="text">{lang ? titlept : title}</div>
        <SkillsArrow open={open}/>
    </h2>


export default SkillsTitle;