import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import useGetResultById from '@hooks/useGetResultById';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

const StyledImage = styled(Image)`
  height: 200px;
  width: 300px;
`;

const ResultsShowScreen: FC = () => {
  useGetResultById();
  const result = useSelector(state => state.search.result);
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }): any => {
          return <StyledImage source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;
