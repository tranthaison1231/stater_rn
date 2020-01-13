import React, { useState, FC } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import HeartContainer from 'components/common/HeartContainer';
import FloatButton from 'components/common/FloatButton';
import { ramdomRgb } from 'utils/color';
import { getRamdomNumber } from 'utils/number';

const ColorScreen: FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [hearts, setHearts] = useState([]);
  const handlePress = (): void => {
    setHearts([
      ...hearts,
      {
        right: getRamdomNumber(20, 150),
      },
    ]);
  };
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Add Color"
        onPress={(): void => setColors([...colors, ramdomRgb()])}
      />
      <Text style={{ fontFamily: 'Inter-Bold', fontSize: 30 }}>
        {' '}
        Hello ColorScreen
      </Text>
      <FlatList
        keyExtractor={(item, index): string => `${item}${index}`}
        data={colors}
        renderItem={({ item }): any => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
      <View style={{ flex: 1 }}>
        {hearts.map((heart, id) => {
          return (
            <HeartContainer key={String(id)} style={{ right: heart.right }} />
          );
        })}
      </View>
      <FloatButton onPress={handlePress} />
    </View>
  );
};

export default ColorScreen;
