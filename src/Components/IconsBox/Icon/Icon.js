import React from 'react';

const Icon = (props) =>
        
    <a href={props.content.href}>
        <i className={props.content.iconClass}></i>
    </a>
 
export default Icon;