import React from 'react';

import './Home.scss';
import rafael from'./rafael.svg';

import Header from '../Header/Header';
import IconsBox from '../IconsBox/IconsBox';

const Home = ({lang}) => 

  <div className="container">
    <div className="title-container">
      <Header lang={ lang }/>
      <IconsBox />
    </div>
    <img  src={rafael} className="img-intro animated fadeIn" alt="rafael drawing"/>
  </div>;

export default Home;