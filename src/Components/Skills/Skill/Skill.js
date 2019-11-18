import React from 'react';
import PropTypes from 'prop-types';

import SkillsTitle from '../SkillsTitle/SkillsTitle';
import SkillsBody from '../SkillsBody/SkillsBody';

import './Skill.scss';

class Skill extends React.Component {

    shouldComponentUpdate(nextProps){
        return this.props.open !== nextProps.open;
    }

    render(){
        const {title, open, onClick, id } = this.props;
        return (
            <div className="skills-section">
                <SkillsTitle 
                    title={title} 
                    open={open} 
                    onClick={onClick} 
                    id={id}
                />
                <SkillsBody {...this.props}/>
            </div> 
        )
    }
}

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