import React from 'react';

const Icon = ({href, iconClass}) =>
        
    <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={iconClass}></i>
    </a>
 
export default Icon;