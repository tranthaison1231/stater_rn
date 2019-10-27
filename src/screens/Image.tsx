import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ImageDetail from 'components/ImageDetail';

const DATA = [
  {
    id: '1',
    image: require('../assets/image/image-1.jpg'),
    title: 'Mountain',
    score: 8,
  },
  {
    id: '2',
    image: require('../assets/image/image-1.jpg'),
    title: 'Beach',
    score: 9,
  },
];

const ImageScreen = () => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={({ item }) => {
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

ImageScreen.propTypes = {};

export default ImageScreen;
