import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './rootReducer.ts';
import rootSagas from './rootSagas.ts';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['search'],
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persitedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSagas);

export default store;
