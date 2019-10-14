import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from '../components/search';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
      <Text> Hello SearchScreen </Text>
    </View>
  );
};

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

export default SearchScreen;
