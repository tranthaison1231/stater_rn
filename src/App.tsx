import React, { FC } from 'react';
import AppContainer from 'screens';
import withRedux from 'hocs/withRedux';
import { ThemeProvider } from 'styled-components/native';
import useTheme from 'hooks/useTheme';
import { NavigationStackProp } from 'react-navigation-stack';
import { setNavigator } from 'utils/navigation';

const App: FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppContainer
        ref={(navigator): NavigationStackProp => {
          setNavigator(navigator);
        }}
      />
    </ThemeProvider>
  );
};

export default withRedux(App);
