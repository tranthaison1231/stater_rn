import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface DefaultTheme {
  mode: string;
  textZoom: string;
}

const useTheme = (
  defaultTheme = { mode: 'light', textZoom: 'normal' },
): DefaultTheme => {
  const getInitialTheme = async (): any => {
    const localTheme = await AsyncStorage.getItem('@theme');
    return localTheme ? JSON.parse(localTheme) : defaultTheme;
  };

  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    const getLocalTheme = async (): any => {
      await AsyncStorage.setItem('@theme', JSON.stringify(theme))
        .then(() => {
          console.log('success');
        })
        .catch(e => {
          console.log(e);
        });
    };
    getLocalTheme();
  }, [theme]);
  const toggleDarkMode = (): any => {
    setTheme(
      theme.mode === 'dark'
        ? { ...theme, mode: 'light' }
        : { ...theme, mode: 'dark' },
    );
  };
  const toggleSizeMode = (): any => {
    setTheme(
      theme.textZoom === 'normal'
        ? { ...theme, textZoom: 'magnify' }
        : { ...theme, textZoom: 'normal' },
    );
  };

  return { ...theme, toggleDarkMode, toggleSizeMode };
};

export default useTheme;
