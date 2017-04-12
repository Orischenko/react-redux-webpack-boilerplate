import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

require('./../sass/style.scss');

ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
);