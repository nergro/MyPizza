import React from 'react';
import './FlashMessage.scss';

const flashMessage = props => {
  const classes = `FlashMessage alert alert-${props.type}`;
  return <div className={classes}>{props.children}</div>;
};

export default flashMessage;
