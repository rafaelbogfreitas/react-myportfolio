import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App/App';

import './index.scss';

const dest = document.querySelector('.root');

ReactDOM.render(
    <App />,
    dest
);