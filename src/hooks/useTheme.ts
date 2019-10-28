import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface DefaultTheme {
  mode: string;
  textZoom: string;
}

const useTheme = (
  defaultTheme: DefaultTheme = { mode: 'light', textZoom: 'normal' },
): any => {
  const getInitialTheme = async (): Promise<DefaultTheme> => {
    try {
      const localTheme = await AsyncStorage.getItem('@theme');
      return localTheme ? JSON.parse(localTheme) : defaultTheme;
    } catch (error) {
      return defaultTheme;
    }
  };

  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);
  useEffect(() => {
    const getLocalTheme = async (): Promise<void> => {
      await AsyncStorage.setItem('@theme', JSON.stringify(theme));
    };
    getLocalTheme();
  }, [theme]);

  const toggleDarkMode = (): void => {
    setTheme(
      theme.mode === 'dark'
        ? { ...theme, mode: 'light' }
        : { ...theme, mode: 'dark' },
    );
  };
  const toggleSizeMode = (): void => {
    setTheme(
      theme.textZoom === 'normal'
        ? { ...theme, textZoom: 'magnify' }
        : { ...theme, textZoom: 'normal' },
    );
  };

  return { ...theme, toggleDarkMode, toggleSizeMode };
};

export default useTheme;
