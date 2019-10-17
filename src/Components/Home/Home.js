import React from 'react';

import './Home.scss';
import rafael from'./rafael.svg';

import IconsBox from '../IconsBox/IconsBox';

const Home = () => 
  <div className="container">
    <div className="title-container">
      <div className="headline headline1">RAFAEL</div>
      <div className="headline headline2">FREITAS</div>
      <div className="subtitle">Front-End Web Development</div>
      <IconsBox />
    </div>
    <img  src={rafael} className="img-intro" alt="rafael drawing"/>
  </div>;

export default Home;