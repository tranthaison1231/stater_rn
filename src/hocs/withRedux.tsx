import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

const persistedStore = persistStore(store);

const withRedux = (App: FC) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <App {...props} />
      </PersistGate>
    </Provider>
  );
};

export default withRedux;
