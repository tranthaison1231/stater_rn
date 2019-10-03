/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { StyledView, StyledText } from './style';

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
