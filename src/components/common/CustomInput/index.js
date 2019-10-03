import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextInput } from './style';

const CustomInput = ({ onChangeText, value }) => {
  return (
    <StyledTextInput
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

CustomInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomInput;
