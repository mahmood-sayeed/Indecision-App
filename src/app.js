//react react-dom validator importing em
// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing');
ReactDOM.render(template, document.getElementById('app'));

