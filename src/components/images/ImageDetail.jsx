import React from 'react';
import { Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>ImageDetail {title}</Text>
      <Text> Image Score - {score} </Text>
    </View>
  );
};

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default ImageDetail;
