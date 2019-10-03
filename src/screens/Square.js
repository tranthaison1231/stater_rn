import React from 'react';
import { View } from 'react-native';
import { ColorCounter } from '../components/squares';
import { StyledColor } from './styles';
import { useColor } from '../hooks';

const SquareScreen = () => {
  const [color, handleColor] = useColor();
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => handleColor('red', 15)}
        onDecrease={() => handleColor('red', -15)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => handleColor('green', 15)}
        onDecrease={() => handleColor('green', -15)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => handleColor('blue', 15)}
        onDecrease={() => handleColor('blue', -15)}
      />
      <StyledColor ramdomRgb={color} />
    </View>
  );
};

SquareScreen.propTypes = {};

SquareScreen.defaultProps = {};

export default SquareScreen;
