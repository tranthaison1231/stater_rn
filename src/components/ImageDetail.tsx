import React, { FC } from 'react';
import { Text, Image, View, ImageSourcePropType } from 'react-native';

interface ImageDetailProps {
  title: string;
  image: ImageSourcePropType;
  score: number;
}

const ImageDetail: FC<ImageDetailProps> = ({
  title,
  image,
  score,
}: ImageDetailProps) => {
  return (
    <View>
      <Image source={image} />
      <Text>ImageDetail {title}</Text>
      <Text> Image Score - {score} </Text>
    </View>
  );
};

export default ImageDetail;
