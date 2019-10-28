import { configureStore } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer(),
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSagas);

export default store;
