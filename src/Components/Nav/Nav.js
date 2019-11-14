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
      skillsState: SkillsContents,
      hideShowMore:[...Array(7)].map(a => a = true)
    }
    //Nav methods bind
    this.toggleIcon = this.toggleIcon.bind(this);
    //Skills methods bind
    this.toogleSkillsBox = this.toogleSkillsBox.bind(this);
    this.closeLayer = this.closeLayer.bind(this);
    this.openLayer = this.openLayer.bind(this);
    this.openAccordeon = this.openAccordeon.bind(this);
    //Projects session bind
    this.toggleShowMore = this.toggleShowMore.bind(this);
  } 
  
  //Nav component methods
  toggleIcon(){
    if(window.innerWidth <= 500) this.setState({ iconOpen: !this.state.iconOpen });
  }

  //Skills component methods
  toogleSkillsBox(e){
    this.setState({ skillsClicked: !this.state.skillsClicked });
  }

  closeLayer(e){
    const state = this.state.skillsState;
    const newState = state.map((a, i) => a.open = false);


    this.setState({ newState  }); 
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

    this.setState({ newState }); 
  }

  //ProjectsSession component methods
  toggleShowMore(e){
    let newShowMore = this.state.hideShowMore;
    let newState = newShowMore.map((a, i) => 
      (e.target.id == i) ? a = !a : a
    )
    console.log(newState);
    this.setState({ hideShowMore: newState });
  }


  render() { 
    return ( 
      <HashRouter>
        <nav> 
          <div id="down-arrow">
            <div className="dropdown-container" onClick={this.toggleIcon}>
              <span className={this.state.iconOpen ? "dropdown-icon dropdown-icon-closed" : "dropdown-icon"}></span>
            </div>
          </div>
          <ul id="main-nav" className={this.state.iconOpen ? 'show animated slideInDown' : ''}>
            <li id="intro-btn"><NavLink exact to='/' onClick={this.toggleIcon}>Home</NavLink></li>
            <li id="about-btn"><NavLink to='/about' onClick={this.toggleIcon}>About</NavLink></li>
            <li id="projects-btn"><NavLink to='/projects' onClick={this.toggleIcon}>Projects</NavLink></li>
            <li id="contact-btn"><NavLink to='/contact' onClick={this.toggleIcon}>Contact</NavLink></li>
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
              />} 
            />
            <Route path='/projects' 
              render={(props) => <ProjectsSession {...props}
                hideShowMore={this.state.hideShowMore}
                toggleShowMore={this.toggleShowMore}
              />}
            />
            <Route path='/contact' component={Contact}/>
          </div>
        </nav>
      </HashRouter> 
    );
  }
}
 
export default Nav;