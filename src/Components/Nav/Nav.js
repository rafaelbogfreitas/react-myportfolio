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
import SkillsContents from '../../util/SkillsContents';

import './Nav.scss';

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      iconOpen: false,
      skillsClicked: false,
      skillsState: SkillsContents
    }

    this.handleClick = this.handleClick.bind(this);
    this.toogleSkillsBox = this.toogleSkillsBox.bind(this);
    this.closeLayer = this.closeLayer.bind(this);
    this.openLayer = this.openLayer.bind(this);
    this.openAccordeon = this.openAccordeon.bind(this);
  } 

  //skills methods

  toogleSkillsBox(e){
    this.setState({ skillsClicked: !this.state.skillsClicked });
  }

  closeLayer(e){
    const state = this.state.skillsState;
    const newState = state.map((a, i) => a.open = false);


    this.setState({ open: newState  }); 
    if(this.state.skillsClicked) this.toogleSkillsBox();
  }

  openLayer(e){
    if(!this.state.skillsClicked) this.toogleSkillsBox();
  }

  openAccordeon(e){
    this.openLayer();
    const state = this.state.skillsState;
    const newState = state.map((a, i) => {
        if(a.title === e.target.id && !a.open) return a.open = true;
        else return a.open = false;
    });

    this.setState({ skillsState: newState  }); 
  }

  //Nav methods
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
            <Route path='/about' 
              render={(props) => <About {...props} 
                skillsClicked={this.state.skillsClicked} 
                toogleSkillsBox={this.toogleSkillsBox}
                openLayer={this.openLayer}
                closeLayer={this.closeLayer}
                openAccordeon={this.openAccordeon}
                skillsState={this.state.skillsState}
              />} />
            <Route path='/projects' component={ProjectsSession} />
            <Route path='/contact' component={Contact}/>
          </div>
        </nav>
      </HashRouter> 
    );
  }
}
 
export default Nav;