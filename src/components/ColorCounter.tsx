import React, { FC } from 'react';
import {
  View,
  Text,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';

interface ColorCounterProps {
  color: string;
  onIncrease: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onDecrease: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const ColorCounter: FC<ColorCounterProps> = ({
  color,
  onIncrease,
  onDecrease,
}: ColorCounterProps) => {
  return (
    <View>
      <Text> {color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

export default ColorCounter;
