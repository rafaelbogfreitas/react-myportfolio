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
      iconOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick(){
    this.setState({ iconOpen: !this.state.iconOpen });
  }

  render() { 
      return ( 
        <HashRouter>
          <nav> 
            <ul id="main-nav">
              <li id="down-arrow">
                <div className="dropdown-container" onClick={this.handleClick}>
                  <span className={this.state.iconOpen ? "dropdown-icon dropdown-icon-closed" : "dropdown-icon"}></span>
                </div>
              </li>
              <li id="intro-btn" className={this.state.iconOpen ? 'show' : ''}><NavLink exact to='/'>Home</NavLink></li>
              <li id="about-btn" className={this.state.iconOpen ? 'show' : ''}><NavLink to='/about'>About</NavLink></li>
              <li id="projects-btn" className={this.state.iconOpen ? 'show' : ''}><NavLink to='/projects'>Projects</NavLink></li>
              <li id="contact-btn" className={this.state.iconOpen ? 'show' : ''}><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={ProjectsSession} />
              <Route path='/contact' component={Contact} />
            </div>
          </nav>
        </HashRouter> 
      );
  }
}
 
export default Nav;