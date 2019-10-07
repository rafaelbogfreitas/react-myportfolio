import React from 'react';

import '../About/About.scss';
import SkillsContents from '../../util/SkillsContents';
import SkillsSession from '../SkillsSession/SkillsSession';

const Skills = () =>
    <aside className="skills">
        <div className="skills-box">
            {SkillsContents.map(a => <SkillsSession key={SkillsContents.indexOf(a)} {...a} />)}  
            {/* {SkillsContents.map(a => <SkillsSession key={SkillsContents.indexOf(a)} content={a} />)}   */}
        </div>
    </aside>;
 
export default Skills;