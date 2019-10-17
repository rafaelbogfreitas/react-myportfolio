import React from 'react';

import IconsContent from '../../util/IconsContent';
import Icon from './Icon/Icon';

import './IconsBox.scss';

const IconsBox = () => 
    <div className="icons-container">
        {IconsContent.map((a,i) => <Icon key={i} content={a} />)}
    </div>

export default IconsBox;