import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';

Icon.loadFont();

const StyledSearchBar = styled(View)`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  flex-direction: row;
  margin: 0 0 10px 0;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  font-size: 18px;
`;

const StyledIcon = styled(Icon)`
  align-self: center;
  margin: 0 15px;
`;

interface SearchBarProps {
  term: string;
  onTermChange: (text: string) => void;
  onTermSubmit: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  term,
  onTermChange,
  onTermSubmit,
}: SearchBarProps) => {
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
