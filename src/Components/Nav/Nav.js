import React, { Component } from 'react';

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

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      iconOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick(){
    if(window.innerWidth <= 500) this.setState({ iconOpen: !this.state.iconOpen });
  }

  render() { 
    return ( 
      <HashRouter>
        <nav> 
          <div id="down-arrow">
            <div className="dropdown-container" onClick={this.handleClick}>
              <span className={this.state.iconOpen ? "dropdown-icon dropdown-icon-closed" : "dropdown-icon"}></span>
            </div>
          </div>
          <ul id="main-nav" className={this.state.iconOpen ? 'show animated slideInDown' : ''}>
            <li id="intro-btn"><NavLink exact to='/' onClick={this.handleClick}>Home</NavLink></li>
            <li id="about-btn"><NavLink to='/about' onClick={this.handleClick}>About</NavLink></li>
            <li id="projects-btn"><NavLink to='/projects' onClick={this.handleClick}>Projects</NavLink></li>
            <li id="contact-btn"><NavLink to='/contact' onClick={this.handleClick}>Contact</NavLink></li>
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
  }
}
 
export default Nav;