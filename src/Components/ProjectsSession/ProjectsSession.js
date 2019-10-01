import React, { Component } from 'react';

import './ProjectsSession.scss';

import ProjectsContent from '../../util/ProjectsContent';
import Projects from '../Projects/Projects';

class ProjectsSession extends Component {
    render() { 
        return ( 
            <div className='projects'>
                <h1>Projects</h1>
                {ProjectsContent.map((a, i) => <Projects key={i} content={a} />)}
            </div>
         );
    }
}
 
export default ProjectsSession;