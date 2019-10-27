import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from 'components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('submit')}
      />
      <Text> Hello SearchScreen </Text>
      <Text>{term}</Text>
    </View>
  );
};

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

export default SearchScreen;
