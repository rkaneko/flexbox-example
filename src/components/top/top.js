'use strict';

const React = require('react');
const {PropTypes} = React;

const ShareCard = require('../share-card/share-card');

const Top = (top) => // eslint-disable-line no-unused-vars
  <div>
    <ShareCard />
  </div>
;

Top.propTypes = {
  top: PropTypes.shape({})
};

module.exports = Top;
