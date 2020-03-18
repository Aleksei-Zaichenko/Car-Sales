import React from 'react';

const AddedFeature = props => {
  return (
    console.log('******feature:',props.feature.name),
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
