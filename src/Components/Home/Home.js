import React, { Component } from 'react';

import './Home.scss';
import rafael from'./rafael.svg';

class Home extends Component {
    render() { 
        return ( 
          <div className="container">
            <div className="title-container">
              <div className="headline headline1">RAFAEL</div>
              <div className="headline headline2">FREITAS</div>
              <div className="subtitle">Front-End Web Development</div>
              <div className="icons-container">
                <a href="mailto:rafaelbogfreitas@gmail.com">
                  <i className="fas fa-envelope-square contact-icons"></i>
                </a>
                <a href="https://www.linkedin.com/in/rafael-borges-de-oliveira-gouveia-e-freitas-49b04016a/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin contact-icons"></i>
                </a>
                  <a href="https://github.com/rafaelbogfreitas" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code-branch contact-icons"></i>
                </a>
                <a href="https://twitter.com/RafaelF03113877" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter-square contact-icons"></i>
                </a>
                <a href="https://www.freecodecamp.org/rafaelborges" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-free-code-camp"></i>
                </a>
              </div>
            </div>
            <img  src={rafael} className="img-intro" alt="rafael drawing"/>
          </div>
        );
    }
}
 
export default Home;