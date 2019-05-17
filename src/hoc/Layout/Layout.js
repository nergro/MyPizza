import React from 'react';
import './Layout.scss';
import Navigation from '../../components/Navigation/Navigation';
import PizzaBuilder from '../../containers/PizzaBuilder/PizzaBuilder';

const layout = () => {
  return (
    <div className='Layout'>
      <Navigation />
      <PizzaBuilder />
    </div>
  );
};

export default layout;
