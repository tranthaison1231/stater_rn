import styled from 'styled-components';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export const StyledMapView = styled(MapView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledColor = styled.View`
  height: 100;
  width: 100;
  background-color: ${props => props.ramdomRgb};
`;
