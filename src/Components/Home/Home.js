import React, { Component } from 'react';

import './Home.scss';
import rafael from'./rafael.svg';

import Icons from '../Icons/Icons';
import IconsContent from '../../util/IconsContent';

class Home extends Component {
    render() { 
        return ( 
          <div className="container">
            <div className="title-container">
              <div className="headline headline1">RAFAEL</div>
              <div className="headline headline2">FREITAS</div>
              <div className="subtitle">Front-End Web Development</div>
              <div className="icons-container">
                {IconsContent.map((a, i) => <Icons  key={i} content={a} />)}
              </div>
            </div>
            <img  src={rafael} className="img-intro" alt="rafael drawing"/>
          </div>
        );
    }
}
 
export default Home;