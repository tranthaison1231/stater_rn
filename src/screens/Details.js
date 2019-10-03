import React from 'react';
import { StyledMapView } from './styles';

const DetailsScreen = () => {
  return (
    <StyledMapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

DetailsScreen.propTypes = {};

export default DetailsScreen;
