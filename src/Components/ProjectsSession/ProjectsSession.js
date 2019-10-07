import React from 'react';

import './ProjectsSession.scss';

import ProjectsContent from '../../util/ProjectsContent';
import Projects from '../Projects/Projects';

const ProjectsSession = () =>
    
    <div className='projects'>
        <h1>Projects</h1>
        {ProjectsContent.map((a, i) => <Projects key={i} {...a} />)}
    </div>;
 
export default ProjectsSession;