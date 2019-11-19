import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styled from 'styled-components';

const StyledSpacer = styled(View)`
  margin: 20px;
`;

const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  margin: 0 0 200px 0;
`;

const BoxScreen: FC = () => {
  return (
    <StyledView>
      <StyledSpacer>
        <Text h3> SignupScreen </Text>
      </StyledSpacer>
      <Input label="Email" />
      <StyledSpacer />
      <Input se label="Password" />
      <StyledSpacer />
      <StyledSpacer>
        <Button title="Go to Signin" />
      </StyledSpacer>
    </StyledView>
  );
};

BoxScreen.navigationOptions = (): any => {
  return {
    header: null,
  };
};

export default BoxScreen;
