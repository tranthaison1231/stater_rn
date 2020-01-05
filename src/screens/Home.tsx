import React, { FC } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import styled from 'styled-components/native';

type HomeScreenProps = {
  navigation: NavigationStackProp;
};

const StyledText = styled(Text)`
  color: green;
`;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <StyledText> Hello</StyledText>
      <Button
        title="Go to Details"
        onPress={(): boolean => navigation.navigate('Details')}
      />
      <Button
        title="Go to Image"
        onPress={(): boolean => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter"
        onPress={(): boolean => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color"
        onPress={(): boolean => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square"
        onPress={(): boolean => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text"
        onPress={(): boolean => navigation.navigate('Text')}
      />
      <Button
        title="Go to Box"
        onPress={(): boolean => navigation.navigate('Box')}
      />
      <Button
        title="Go to Search"
        onPress={(): boolean => navigation.navigate('Search')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
