import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput } from 'react-native';

Icon.loadFont();

const StyledSearchBar = styled(View)`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 0 15px;
  flex-direction: row;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  font-size: 18px;
`;

const StyledIcon = styled(Icon)`
  align-self: center;
  margin: 0 15px;
`;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <StyledSearchBar>
      <StyledIcon size={40} name="rocket" />
      <StyledTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
