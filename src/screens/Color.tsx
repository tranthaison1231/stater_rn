import React, { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import styled from 'styled-components';

const StyledColor = styled(View)`
  height: 100;
  width: 100;
  background-color: ${({ ramdomRgb }) => ramdomRgb};
`;

const ColorScreen = () => {
  const [colors, setColors] = useState<String[]>([]);
  const ramdomRgb = (): string => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, ramdomRgb()])}
      />
      <Text> Hello ColorScreen</Text>
      <FlatList
        keyExtractor={(item, index) => `${item}${index}`}
        data={colors}
        renderItem={({ item }) => {
          return <StyledColor ramdomRgb={item} />;
        }}
      />
    </View>
  );
};

export default ColorScreen;
