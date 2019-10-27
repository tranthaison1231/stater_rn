/* eslint-disable react/require-default-props */
import React, { FC, ReactNode } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
} from 'react-native';
import styled from 'styled-components';

interface StyledProps {
  backgroundColor?: string;
  color?: string;
}

const StyledView = styled(View)`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  background-color: ${(props: StyledProps): string =>
    props.backgroundColor || '#1976d2'};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 2px;
  elevation: 6;
`;

const StyledText = styled(Text)`
  color: ${(props: StyledProps): string => props.color || '#fff'};
  font-weight: 500;
`;

interface CustomButtonProps {
  children: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  backgroundColor?: string;
  color?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onPress,
  backgroundColor,
  color,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView backgroundColor={backgroundColor}>
        <StyledText color={color}>{children}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default CustomButton;
