import React from 'react';
import { Text, Image, View } from 'react-native';

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>ImageDetail {title}</Text>
      <Text> Image Score - {score} </Text>
    </View>
  );
};

export default ImageDetail;
