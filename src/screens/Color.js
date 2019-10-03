import React, { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import { StyledColor } from './styles';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const ramdomRgb = () => {
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
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return <StyledColor ramdomRgb={item} />;
        }}
      />
    </View>
  );
};

ColorScreen.propTypes = {};

ColorScreen.defaultProps = {};

export default ColorScreen;
