import React from 'react';
import { connect } from 'react-redux';

import {addFeature} from '../actions/carFeaturesActions';

const AdditionalFeature = props => {
  return (
    console.log('additionlaFeature:',props.feature),
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button" 
        onClick={()=> props.addFeature(props.feature.id, props.feature.name, props.feature.price ) }
      >Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  {addFeature}
)(AdditionalFeature);
