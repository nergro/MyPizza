import React from 'react';
import './Pizza.scss';
import TableImage from '../../assets/images/table.jpg';
import Ingredients from './Ingredients/Ingredients';

const pizza = props => {
  const style = {
    backgroundImage: `url(${TableImage})`,
    backgroundSize: 'cover'
  };
  return (
    <div className='Pizza' style={style}>
      <Ingredients toppings={props.toppings} />
    </div>
  );
};

export default React.memo(pizza);
