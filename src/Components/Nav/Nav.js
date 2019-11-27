import React, { useState, useEffect } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ProjectsSession from '../ProjectsSession/ProjectsSession';

import './Nav.scss';

const Nav = () => {
  
  const [iconOpen, setIconOpen] = useState(false);
  
  useEffect(() => {
    window.addEventListener('resize', function() {
      if(window.innerWidth > 500) setIconOpen(false)
    })
  });

  // render() { 
    return ( 
      <HashRouter>
        <nav> 
          <div id="down-arrow">
            <div className="dropdown-container" onClick={() => setIconOpen(!iconOpen)}>
              <span className={iconOpen ? "dropdown-icon dropdown-icon-closed" : "dropdown-icon"}></span>
            </div>
          </div>
          <ul id="main-nav" className={iconOpen ? 'show animated slideInDown' : ''}>
            <li id="intro-btn"><NavLink exact to='/' onClick={() => window.innerWidth <= 500 ? setIconOpen(!iconOpen) : null}>Home</NavLink></li>
            <li id="about-btn"><NavLink to='/about' onClick={() => window.innerWidth <= 500 ? setIconOpen(!iconOpen) : null}>About</NavLink></li>
            <li id="projects-btn"><NavLink to='/projects' onClick={() => window.innerWidth <= 500 ? setIconOpen(!iconOpen) : null}>Projects</NavLink></li>
            <li id="contact-btn"><NavLink to='/contact' onClick={() => window.innerWidth  <= 500 ? setIconOpen(!iconOpen) : null}>Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={ProjectsSession} />
            <Route path='/contact' component={Contact}/>
          </div>
        </nav>
      </HashRouter> 
    );
  // }
}
 
export default Nav;