import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text> {color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

ColorCounter.propTypes = {
  color: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

ColorCounter.defaultProps = {};

export default ColorCounter;
