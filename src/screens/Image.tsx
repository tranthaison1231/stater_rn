import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import ImageDetail from 'components/ImageDetail';
import sunshine from 'assets/image/sunshine.jpg';

const DATA = [
  {
    id: '1',
    image: sunshine,
    title: 'Mountain',
    score: 8,
  },
  {
    id: '2',
    image: sunshine,
    title: 'Beach',
    score: 9,
  },
];

const ImageScreen: FC = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item): string => item.id}
        data={DATA}
        renderItem={({ item }): any => {
          return (
            <ImageDetail
              key={item.id}
              image={item.image}
              title={item.title}
              score={item.score}
            />
          );
        }}
      />
    </View>
  );
};

export default ImageScreen;
