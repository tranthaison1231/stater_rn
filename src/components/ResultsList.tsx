import React, { FC } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks';
import ResultsDetail from './ResultsDetail';

interface ResultsListProps {
  title: string;
  results: any;
}
const StyledView = styled(View)`
  margin: 0 0 10px 0;
`;

const StyledText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const ResultsList: FC<ResultsListProps> = ({
  title,
  results,
}: ResultsListProps) => {
  const { navigate } = useNavigation();
  if (!results.length) {
    return null;
  }
  return (
    <StyledView>
      <StyledText> {title} </StyledText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }): any => {
          return (
            <TouchableOpacity
              onPress={(): void => navigate('ResultsShow', { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </StyledView>
  );
};

export default ResultsList;
