import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const HomeScreen = ({ navigation }) => {
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
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.node.isRequired,
};

export default HomeScreen;
