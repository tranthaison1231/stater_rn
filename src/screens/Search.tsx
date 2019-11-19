import React, { useState, FC, useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import SearchBar from 'components/SearchBar';
import ResultsList from 'components/ResultsList';
import styled, { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getDataSearch } from 'redux/search/reducer';


const StyledView = styled(View)`
  margin: 10px 0 0 10px;
  flex: 1;
`

const SearchScreen: FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const { businesses: results, error: errorMessage } = useSelector(state => state.search.data);
  const searchApi = (searchTerm): void => {
    dispatch(
      getDataSearch({ limit: 50, term: searchTerm, location: 'san jose' }),
    );
  };
  const theme = useContext(ThemeContext);

  const filterResultsByPrice = price => {
    return results?.filter(result => {
      return result.price === price;
    });
  };
  return (
    <StyledView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={(): any => searchApi(term)}
      />
      <Button title="Change Theme" onPress={theme.toggleDarkMode} />
      { errorMessage ? <Text> { errorMessage }</Text>: null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </StyledView>
  );
};

export default SearchScreen;
