import React, { FC } from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native';

const StyledTextInput = styled(TextInput)`
  border: 1px solid #eee;
  padding: 5px;
  margin: 8px;
`;

interface CustomInputProps {
  onChangeText: (text: string) => void;
  value: string;
}

const CustomInput: FC<CustomInputProps> = ({
  onChangeText,
  value,
}: CustomInputProps) => {
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
