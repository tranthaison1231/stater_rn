import React, { useState, FC, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import SearchBar from 'components/SearchBar';
import ResultsList from 'components/ResultsList';
import styled, { ThemeContext } from 'styled-components';
import { getFontSize, getPalette } from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { getDataSearch } from 'redux/search/reducer';

const StyledText = styled(Text)`
  background-color: ${props => getPalette(props).primary};
  font-size: ${getFontSize};
`;

const SearchScreen: FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const results = useSelector(state => state.search.data);
  const searchApi = (searchTerm): void => {
    dispatch(getDataSearch(50, searchTerm, 'san jose'));
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
