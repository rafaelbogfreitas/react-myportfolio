import React from 'react';
import PropTypes from 'prop-types';

import SkillsTitle from '../SkillsTitle/SkillsTitle';
import SkillsBody from '../SkillsBody/SkillsBody';

import './Skill.scss';

const Skill = (props) =>
    <div className="skills-section">
        <SkillsTitle title={props.title} open={props.open} onClick={props.onClick} id={props.id}/>
        <SkillsBody {...props}/>
    </div>

Skill.propTypes = {
    title: PropTypes.string.isRequired, 
    contents: PropTypes.arrayOf(PropTypes.object), 
    books: PropTypes.arrayOf(PropTypes.object),  
    span: PropTypes.bool.isRequired, 
    hasAuthor: PropTypes.bool.isRequired
}

Skill.defaultProps = {
    title: 'Missing Title',
    contents: [{title:'Missing content title', body: 'Missing content body'}],
    books: [{title:'Missing Book title', author: 'Missing Author name'}],
    span: false,
    hasAuthor:true
};
 
export default Skill;