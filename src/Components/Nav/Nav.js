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
import Switch from '../Switch/Switch';

import './Nav.scss';
import ProjectsContent from '../../util/ProjectsContent';

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      lang:true,
      iconOpen: false,
      skillsClicked: false,
      skillsState: SkillsContents,
      hideShowMore:[...Array(ProjectsContent.length)].map(a => a = true)
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
    this.toggleLang = this.toggleLang.bind(this);
  } 
  
  //Nav component methods
  toggleIcon(){
    if(window.innerWidth <= 500) this.setState({ iconOpen: !this.state.iconOpen });
  }

  toggleLang(){
    this.setState({ lang: !this.state.lang});
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
      (Number.parseInt(e.target.id) === i) ? a = !a : a
    )
    this.setState({ hideShowMore: newState });
  }


  render() { 
    return ( 
      <HashRouter>
        <nav> 
          <Switch onClick={this.toggleLang} lang={this.state.lang}/>
          <div id="down-arrow">
            <div className="dropdown-container" onClick={this.toggleIcon}>
              <span className={this.state.iconOpen ? "dropdown-icon dropdown-icon-closed" : "dropdown-icon"}></span>
            </div>
          </div>
          <ul id="main-nav" className={this.state.iconOpen ? 'show animated slideInDown' : ''}>
            <li id="intro-btn">
              <NavLink exact to='/' onClick={this.toggleIcon}>
                {this.state.lang ? "Início" : "Home"}
              </NavLink>
            </li>
            <li id="about-btn">
              <NavLink to='/about' onClick={this.toggleIcon}>
                {this.state.lang ? "Sobre" : "About"}
              </NavLink>
            </li>
            <li id="projects-btn">
              <NavLink to='/projects' onClick={this.toggleIcon}>
                {this.state.lang ? "Projetos" : "Projects"}
              </NavLink>
            </li>
            <li id="contact-btn">
              <NavLink to='/contact' onClick={this.toggleIcon}>
                {this.state.lang ? "Contato" : "Contact"}
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path='/'  
                   render={() => <Home lang={this.state.lang}/>}
            />
            <Route path='/about' 
              render={(props) => <About {...props} 
                skillsClicked={this.state.skillsClicked} 
                toogleSkillsBox={this.toogleSkillsBox}
                openLayer={this.openLayer}
                closeLayer={this.closeLayer}
                openAccordeon={this.openAccordeon}
                skillsState={this.state.skillsState}
                lang={this.state.lang}
              />} 
            />
            <Route path='/projects' 
              render={(props) => <ProjectsSession {...props}
                hideShowMore={this.state.hideShowMore}
                toggleShowMore={this.toggleShowMore}
                lang={this.state.lang}
              />}
            />
            <Route 
              path='/contact' 
              render={() => <Contact
                lang={this.state.lang}
              />}

            />
          </div>
        </nav>
      </HashRouter> 
    );
  }
}
 
export default Nav;