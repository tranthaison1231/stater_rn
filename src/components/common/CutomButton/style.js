import styled from 'styled-components';

export const StyledView = styled.View`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor || '#1976d2'};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 2px;
  elevation: 6;
`;

export const StyledText = styled.Text`
  color: ${props => props.color || '#fff'};
  font-weight: 500;
`;
