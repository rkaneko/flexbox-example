'use strict';

const styles = require('./share-card.css');
const classNames = require('classnames');

const React = require('react');

const ShareCard = ({sharecard}) => (
  <div className={classNames(styles.card)}>
    <i className={classNames('fa', 'fa-facebook', styles.card__item, styles.icon)} aria-hidden={true}></i>
    <div className={classNames(styles.card__item, styles.label)}>
      facebook
    </div>
  </div>
);

module.exports = ShareCard;
