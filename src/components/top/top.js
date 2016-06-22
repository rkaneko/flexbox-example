'use strict';

const React = require('react');
const {PropTypes} = React;

const ShareButton = require('../share-button/share-button');

const Top = (top) => // eslint-disable-line no-unused-vars
  <div>
    <ShareButton />
  </div>
;

Top.propTypes = {
  top: PropTypes.shape({})
};

module.exports = Top;
