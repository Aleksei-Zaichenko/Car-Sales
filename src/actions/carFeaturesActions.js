export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// action creator
export const addFeature = (featureId, featureName, featurePrice) => {
  // create and return action objects
  return { type: ADD_FEATURE, payloadfeatureId: featureId,
                              payloadfeatureName: featureName,
                              payloadfeaturePrice: featurePrice
 };
};

export const removeFeature = (featureId, featurePrice) => {
    return { type: REMOVE_FEATURE, payloadfeatureId: featureId, payloadfeaturePrice: featurePrice };
};