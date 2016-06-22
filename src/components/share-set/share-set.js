'use strict';

const styles = require('./share-set.css');

const classNames = require('classnames');

const React = require('react');

const ShareButton = require('../share-button/share-button');

const ShareSet = ({shareset}) => (
  <div className={classNames(styles.shareSet)}>
    <ShareButton />
    <ShareButton />
    <ShareButton />
  </div>
);

module.exports = ShareSet;
