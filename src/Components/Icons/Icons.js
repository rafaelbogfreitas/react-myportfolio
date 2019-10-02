import React, { Component } from 'react';



const Icons = (props) => {
    return (
        
        <a href={props.content.href}>
            <i className={props.content.iconClass}></i>
        </a>
        
    )
}
 
export default Icons;