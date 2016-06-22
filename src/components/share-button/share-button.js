'use strict';

const styles = require('./share-button.css');

const classNames = require('classnames');

const React = require('react');

const ShareButton = ({sharebutton}) => (
  <div className={classNames(styles.shareButton, styles.width)}>
    <i className={classNames('fa', 'fa-facebook', styles.icon)} aria-hidden={true}>
    </i>
    <div className={classNames(styles.label)}>
    facebook
    </div>
  </div>
);

module.exports = ShareButton;
