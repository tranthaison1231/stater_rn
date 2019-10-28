import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';

const withRedux = (App: FC) => (props: any) => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

export default withRedux;
