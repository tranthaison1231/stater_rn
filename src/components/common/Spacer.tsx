import React, { FC } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const StyledView = styled(View)`
  margin: 20px;
`;

const Spacer: FC = ({ children }) => {
  return <StyledView> {children} </StyledView>;
};

export default Spacer;
