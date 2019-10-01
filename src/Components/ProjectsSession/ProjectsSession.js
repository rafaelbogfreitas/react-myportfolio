import React, { Component } from 'react';

import './ProjectsSession.scss';

import ProjectsContent from '../../util/ProjectsContent';
import Projects from '../Projects/Projects';

class ProjectsSession extends Component {
    render() { 
        return ( 
            <div className='projects'>
                <h1>My Projects</h1>
                {ProjectsContent.map(a => <Projects content={a} />)}
            </div>
         );
    }
}
 
export default ProjectsSession;