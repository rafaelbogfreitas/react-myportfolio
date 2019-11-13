import React from 'react';

import './Home.scss';
import rafael from'./rafael.svg';

import Header from '../Header/Header';
import IconsBox from '../IconsBox/IconsBox';
import Footer from '../Footer/Footer';

const Home = () => 

  <div className="container">
    <div className="title-container">
      <Header />
      <IconsBox />
    </div>
    <img  src={rafael} className="img-intro animated fadeIn" alt="rafael drawing"/>
    {window.innerWidth < 900 ? <Footer /> : null}
  </div>;

export default Home;