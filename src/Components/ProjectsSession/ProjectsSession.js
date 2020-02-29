import React from 'react';

import './ProjectsSession.scss';

import ProjectsContent from '../../util/ProjectsContent';
import Projects from './Projects/Projects';

const ProjectsSession = ({hideShowMore, toggleShowMore, lang}) =>
    
    <div className='projects'>
        <h1>{lang ? "Projetos" : "Projects"}</h1>
        {
            ProjectsContent.map((a, i) => 
                <Projects 
                    key={i} 
                    id={i} 
                    {...a} 
                    toggleShowMore={toggleShowMore}
                    hideShowMore={hideShowMore[i]}
                    lang={lang}
                />)
        }
    </div>;
 
export default ProjectsSession;