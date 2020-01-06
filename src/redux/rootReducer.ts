import { combineReducers } from '@reduxjs/toolkit';
import search from './search/reducer';

const rootReducer = combineReducers({ search });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
