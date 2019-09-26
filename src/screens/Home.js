import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text> Hello</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
