import React, { FC } from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatButton: FC<Props> = ({ onPress, color, size }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 32,
        left: 32,
      }}
    >
      <Icon
        size={15}
        name="plus"
        style={{
          color: '#fff',
        }}
      />
    </TouchableOpacity>
  );
};

interface Props {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  color?: string;
  size?: number;
}

FloatButton.defaultProps = {
  size: 60,
  color: '#000',
};

export default FloatButton;
