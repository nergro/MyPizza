import React from 'react';
import './Layout.scss';
import Navigation from '../../components/Navigation/Navigation';

const layout = props => {
  return (
    <div className='Layout'>
      <Navigation />
      {props.children}
    </div>
  );
};

export default layout;
