'use strict';

const ReactDOM = require('react-dom');

const Top = require('../modules/top/top');

ReactDOM.render(
  Top,
  document.getElementsByClassName(
    'flexbox-example-main'
  )[0] // eslint-disable-line no-magic-numbers
);
