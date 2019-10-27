/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
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

const StyledText = styled.Text`
  color: ${props => props.color || '#fff'};
  font-weight: 500;
`;

const CustomButton = ({ children, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView backgroundColor={backgroundColor}>
        <StyledText color={color}>{children}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default CustomButton;
