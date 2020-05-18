import React from 'react';

import "./Switch.scss";

const Switch = ({onClick, lang}) => 
    <div className="container-switch">
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" onClick={() => onClick()}></span>
        </label>
        <div className="lang-container">
            { lang ? "pt-br" : "eng"}
        </div>
    </div>

export default Switch;