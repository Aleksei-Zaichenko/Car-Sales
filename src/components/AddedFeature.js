import React from 'react';

import { connect } from 'react-redux';

import {removeFeature} from '../actions/carFeaturesActions';

const AddedFeature = props => {
  return (
    console.log('******feature:',props.feature.name),
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={ () => props.removeFeature(props.feature.id, props.feature.price) }
      >X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
