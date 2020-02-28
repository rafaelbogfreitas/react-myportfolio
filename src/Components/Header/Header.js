import React from 'react';

import Letter from './Letter/Letter';

import './Header.scss';

let firstName = 'rafael';
let secondName = 'freitas';

const Header = ({lang}) => {
    let subtitle = lang ? 'desenvolvimento front-end' : 'front-end web development';
    return (<div className="header-box animated fadeInUp">
        <div className="headline headline1">{firstName.toUpperCase().split('').map((letter, i) => <Letter key={i} letter={letter}/>)}</div>
        <div className="headline headline2">{secondName.toUpperCase().split('').map((letter, i) => <Letter key={i} letter={letter}/>)}</div>
        <div className="subtitle">{subtitle.toUpperCase().split('').map((letter, i) => <Letter key={i} letter={letter}/>)}</div>
    </div>);
};

export default Header;