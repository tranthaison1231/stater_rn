import React, { useState, FC, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import SearchBar from 'components/SearchBar';
import { searchYelp } from 'api/yelp';
import ResultsList from 'components/ResultsList';
import styled, { ThemeContext } from 'styled-components';
import { getFontSize, getPalette } from 'theme';

const StyledText = styled(Text)`
  background-color: ${props => getPalette(props).primary};
  font-size: ${getFontSize};
`;

const SearchScreen: FC = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState();

  const searchApi = async (searchTerm): Promise<void> => {
    try {
      const response = await searchYelp(50, searchTerm, 'san jose');
      setResults(response.data.businesses);
    } catch (err) {
      console.error(err);
    }
  };
  const theme = useContext(ThemeContext);
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={(): any => searchApi(term)}
      />
      <Button title="Change Theme" onPress={theme.toggleDarkMode} />
      <StyledText> Hello SearchScreen </StyledText>
      <StyledText>We have found {results && results.length} results</StyledText>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
    </View>
  );
};

export default SearchScreen;
