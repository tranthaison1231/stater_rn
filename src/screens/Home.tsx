import React, { FC } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type HomeScreenProps = {
  navigation: NavigationStackProp;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text> Hello</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate('Square')}
      />
      <Button title="Go to Text" onPress={() => navigation.navigate('Text')} />
      <Button title="Go to Box" onPress={() => navigation.navigate('Box')} />
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;