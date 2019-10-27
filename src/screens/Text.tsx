import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from 'components/common/CustomButton';
import CustomInput from 'components/common/CustomInput';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  const showAlert = (): void => {
    console.log('You need to...');
  };
  return (
    <View>
      <Text> Enter password: </Text>
      <CustomInput
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? <Text> Password mus be 4 character </Text> : null}
      <CustomButton onPress={showAlert}>Hello</CustomButton>
    </View>
  );
};

TextScreen.propTypes = {};

TextScreen.defaultProps = {};

export default TextScreen;
