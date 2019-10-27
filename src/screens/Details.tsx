import React from 'react';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styled from 'styled-components';

const StyledMapView = styled(MapView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

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
