import React, { useState, FC } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import TextAnimator from '../components/common/TextAnimator.tsx';
import FloatButton from '../components/common/FloatButton.tsx';

const CounterScreen: FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView>
      <FloatButton color="#000" size={60} />
      <TextAnimator content="Hello Suu yeu dau" duration={1000} />
      <Button title="Increase" onPress={(): void => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={(): void => setCounter(counter - 1)} />
      <Text> Counter: {counter}</Text>
    </SafeAreaView>
  );
};

export default CounterScreen;
