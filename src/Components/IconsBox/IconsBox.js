import React from 'react';

import IconsContent from '../../util/IconsContent';
import Icon from './Icon/Icon';

import './IconsBox.scss';

const IconsBox = () => 
    <div className="icons-container animated fadeInUp">
        {IconsContent.map((a,i) => <Icon key={i} {...a} />)}
    </div>

export default IconsBox;