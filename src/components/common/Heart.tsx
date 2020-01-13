import React, { FC } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Heart: FC<Props> = ({ color, size }: Props) => {
  return (
    <View>
      <Icon
        size={size}
        name="heart"
        style={{
          color,
        }}
      />
    </View>
  );
};

interface Props {
  color?: string;
  size?: number;
}

Heart.defaultProps = {
  size: 60,
  color: '#000',
};

export default Heart;
