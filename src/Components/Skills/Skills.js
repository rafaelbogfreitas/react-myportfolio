import React, { useState } from 'react';

import '../About/About.scss';
import './Skills.scss';

import SkillsContents from '../../util/SkillsContents';
import SkillsBox from './SkillsBox/SkillsBox';

const Skills = () => {

    const [ clicked, setClicked ] = useState(false);
    const [ accordeon, setAccordeon ] = useState(SkillsContents);

    const handleClick = () => setClicked(!clicked);
    
    const closeLayer = () => {
        
        let state = accordeon;

        const newState = state.map((a, i) => {return { ...a, open: false }});
       
        setAccordeon(newState);
        
        if(clicked) handleClick();
    }
    
    const openLayer = () => (!clicked) ? handleClick() : null;

    const openAccordeon = (e) => {
        
        openLayer();
        
        let state = accordeon;
        
        let newState = state.map((a, i) => 
            (a.title === e.target.id && !a.open) ? 
            { ...a, open : true} : 
            { ...a, open: false }
        );

        setAccordeon(newState);
    }


    return(
        <aside className={clicked ? 'skills on-focus' : 'skills'}>
            <div className={clicked ? 'layer-closer' : 'hidden'} 
                onClick={closeLayer}>
                    X
            </div>
            <SkillsBox 
                state={accordeon} 
                openAccordeon={openAccordeon}
            />
        </aside>
    );
}
 
export default Skills;