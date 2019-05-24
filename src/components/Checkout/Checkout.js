import React from 'react';
import './Checkout.scss';

const checkout = props => {
  const aa = props.checkout();
  const sizeObj = {
    ...aa['pizzaSize']
  };
  const toppingObj = {
    ...aa['toppings']
  };
  let toppingSection = null;
  if (Object.keys(toppingObj).length > 0) {
    toppingSection = (
      <React.Fragment>
        <tr>
          <th>Toppings</th>
          <th />
        </tr>
        {Object.keys(toppingObj).map(x => {
          return (
            <React.Fragment key={x}>
              <tr>
                <td>{x}</td>
                <td>{toppingObj[x].toFixed(2)}$</td>
              </tr>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <div className='Checkout'>
      <h4>Your order</h4>

      <table className='Order'>
        <thead>
          <tr>
            <th>Pizza Size</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(sizeObj).map(x => {
              return (
                <React.Fragment key={x}>
                  <td>{x}</td>
                  <td>{sizeObj[x].toFixed(2)}$</td>
                </React.Fragment>
              );
            })}
          </tr>
          {toppingSection}
        </tbody>
      </table>
      <h5>
        <strong>Total Cost:</strong> {props.totalCost.toFixed(2)}$
      </h5>
      <button className='btn btn-success submit-btn' onClick={props.clicked}>
        Submit
      </button>
    </div>
  );
};

export default checkout;
