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
  background-color: ${(props: StyledColorProps): string => props.ramdomRgb};
`;

const SquareScreen: FC = () => {
  const { color, handleColor } = useColor();
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={(): void | null => handleColor('red', 15)}
        onDecrease={(): void | null => handleColor('red', -15)}
      />
      <ColorCounter
        color="Green"
        onIncrease={(): void | null => handleColor('green', 15)}
        onDecrease={(): void | null => handleColor('green', -15)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={(): void | null => handleColor('blue', 15)}
        onDecrease={(): void | null => handleColor('blue', -15)}
      />
      <StyledColor ramdomRgb={color} />
    </View>
  );
};

export default SquareScreen;
