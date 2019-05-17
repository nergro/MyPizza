import React from 'react';

const ingredient = props => {
  const arr = Array(12).fill(null);

  return (
    <React.Fragment>
      {arr.map((x, i) => {
        let classes = props.ingredient + ' ' + props.ingredient + '-' + (i + 1);
        let display = '';
        props.added ? (display = 'block') : (display = 'none');
        return (
          <div
            className={classes}
            key={props.ingredient + i}
            style={{ display: display }}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ingredient;
