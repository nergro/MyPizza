import React from 'react';

const ingredient = props => {
  const arr = Array(12).fill(null);

  return (
    <React.Fragment>
      {arr.map((x, i) => {
        let classes = props.ingredient + ' ' + props.ingredient + '-' + (i + 1);
        return <div className={classes} key={props.ingredient + i} />;
      })}
    </React.Fragment>
  );
};

export default ingredient;
