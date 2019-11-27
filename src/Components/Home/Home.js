import React, { useEffect, useState } from 'react';

import './Home.scss';
import rafael from'./rafael.svg';

import Header from '../Header/Header';
import IconsBox from '../IconsBox/IconsBox';
import Footer from '../Footer/Footer';

const Home = () => {

  const [ showFooter, setShowFooter ] = useState(true);

  
  useEffect(() => {
    if(window.innerWidth > 500) setShowFooter(false);
    window.addEventListener('resize', function(){
      if(window.innerWidth > 500) setShowFooter(false);
      else setShowFooter(true);
    });

  }, []);
  
  return (
    <div className="container">
      <div className="title-container">
        <Header />
        <IconsBox />
      </div>
      <img  src={rafael} className="img-intro animated fadeIn" alt="rafael drawing"/>
      { showFooter && window.innerWidth >= 500 ? <Footer /> : null }
    </div>
  );

}
export default Home;