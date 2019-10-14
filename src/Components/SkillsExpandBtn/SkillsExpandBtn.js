import React from 'react';
import PropTypes from 'prop-types';

import './SkillsExpandBtn.scss';

const SkillsExpandBtn = (props) => 
<i  onClick={props.onClick} className={props.clicked ? 'hidden' : 'fas fa-expand-arrows-alt expand-btn'}></i>

SkillsExpandBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    clicked: PropTypes.bool.isRequired
};

export default SkillsExpandBtn;