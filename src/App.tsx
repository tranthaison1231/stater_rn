import React, { FC } from 'react';
import AppContainer from 'screens';
import withRedux from 'hocs/withRedux';
import { ThemeProvider } from 'styled-components';
import useTheme from 'hooks/useTheme';

const App: FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
