import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

Icon.loadFont();

export const StyledSearchBar = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 0 15px;
  flex-direction: row;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

export const StyledIcon = styled(Icon)`
  align-self: center;
  margin: 0 15px;
`;

const SearchBar = ({ term, onTermChange }) => {
  return (
    <StyledSearchBar>
      <StyledIcon size={40} name="rocket" />
      <StyledTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  onTermChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {};

export default SearchBar;
