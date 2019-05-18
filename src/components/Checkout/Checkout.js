import React from 'react';
import './Checkout.scss';

const checkout = props => {
  const aa = props.checkout();
  const sizeObj = aa[0];
  const toppingObj = aa[1];
  console.log(aa);
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
                <React.Fragment>
                  <td>{x}</td>
                  <td>{sizeObj[x].toFixed(2)}$</td>
                </React.Fragment>
              );
            })}
          </tr>
          <tr>
            <th>Topping</th>
            <th />
          </tr>
          {Object.keys(toppingObj).map(x => {
            return (
              <React.Fragment>
                <tr>
                  <td>{x}</td>
                  <td>{toppingObj[x].toFixed(2)}$</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <h5>
        <strong>Total Cost:</strong> {props.totalCost.toFixed(2)}$
      </h5>
      <button className='btn btn-success submit-btn'>Submit</button>
    </div>
  );
};

export default checkout;
