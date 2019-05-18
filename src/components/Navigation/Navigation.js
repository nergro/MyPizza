import React from 'react';
import './Navigation.scss';
import PizzaIcon from '../../assets/images/pizza-icon.png';

const navigation = () => {
  return (
    <div className='Navigation'>
      <img className='PizzaIcon-1' src={PizzaIcon} alt='Pizza Icon' />
      <h1>MyPizza</h1>
      <img className='PizzaIcon-2' src={PizzaIcon} alt='Pizza Icon' />
    </div>
  );
};

export default navigation;
