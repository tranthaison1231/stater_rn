import React, { useState, FC } from 'react';
import { Text, Button, View } from 'react-native';

const CounterScreen: FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={(): void => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={(): void => setCounter(counter - 1)} />
      <Text> Counter: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
