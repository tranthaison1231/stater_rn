import React, { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { useColor } from 'hooks';
import ColorCounter from 'components/ColorCounter';

type StyledColorProps = {
  ramdomRgb: string;
};

const StyledColor = styled(View)`
  height: 100;
  width: 100;
  background-color: ${(props: StyledColorProps) => props.ramdomRgb};
`;

const SquareScreen: FC = () => {
  const { color, handleColor } = useColor();
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

export default SquareScreen;
