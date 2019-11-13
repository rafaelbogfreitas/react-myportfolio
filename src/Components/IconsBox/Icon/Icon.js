import React from 'react';

const Icon = ({content}) =>
        
    <a href={content.href}>
        <i className={content.iconClass}></i>
    </a>
 
export default Icon;