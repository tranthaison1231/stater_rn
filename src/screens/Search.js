import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from '../components/search';

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text> Hello SearchScreen </Text>
    </View>
  );
};

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

export default SearchScreen;
