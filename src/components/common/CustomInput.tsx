import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput } from 'react-native';

const StyledTextInput = styled(TextInput)`
  border: 1px solid #eee;
  padding: 5px;
  margin: 8px;
`;

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

export default CustomInput;
