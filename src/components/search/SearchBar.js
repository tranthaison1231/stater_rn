import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

export const StyledSearchBar = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 0 15px;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Icon size={30} name="ios-trash" color="red" />
      <Text> Hello SearchBar </Text>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
