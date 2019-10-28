import { combineReducers } from 'redux-starter-kit';
import search from './search/reducer';

const rootReducer = (): any => combineReducers({ search });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
