import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

interface ResultsListProps {
  title: string;
}

const StyledText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const ResultsList: FC<ResultsListProps> = ({ title }: ResultsListProps) => {
  return (
    <View>
      <StyledText> {title} </StyledText>
    </View>
  );
};

export default ResultsList;
