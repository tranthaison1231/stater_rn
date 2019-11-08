import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledImage = styled(Image)`
  border-radius: 4px;
  width: 250px;
  height: 120px;
  /* margin: 0 0 5px 0; */
`;

const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`;

const StyledView = styled(View)`
  margin: 0 0 0 10px;
`;

const ResultsDetail = ({ result }) => {
  return (
    <StyledView>
      <StyledImage source={{ uri: result.image_url }} />
      <StyledText> {result.name}</StyledText>
      <Text>
        {result.rating} Starts, {result.review_count} Reviews
      </Text>
    </StyledView>
  );
};

export default ResultsDetail;
