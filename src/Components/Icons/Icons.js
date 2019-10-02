import React from 'react';

const Icons = (props) =>
        
    <a href={props.content.href}>
        <i className={props.content.iconClass}></i>
    </a>
 
export default Icons;