import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SkillsTitle from '../SkillsTitle/SkillsTitle';
import SkillsBody from '../SkillsBody/SkillsBody';

const SkillsBox = (props) =>
            <div className="skills-section">
                <SkillsTitle title={props.title} open={props.open} onClick={props.onClick} id={props.id}/>
                <SkillsBody {...props}/>
            </div>

SkillsBox.propTypes = {
    title: PropTypes.string.isRequired, 
    contents: PropTypes.arrayOf(PropTypes.object), 
    books: PropTypes.arrayOf(PropTypes.object),  
    span: PropTypes.bool.isRequired, 
    hasAuthor: PropTypes.bool.isRequired
}

SkillsBox.defaultProps = {
    title: 'Missing Title',
    contents: [{title:'Missing content title', body: 'Missing content body'}],
    books: [{title:'Missing Book title', author: 'Missing Author name'}],
    span: false,
    hasAuthor:true
};
 
export default SkillsBox;