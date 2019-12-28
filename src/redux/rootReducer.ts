import { combineReducers } from '@reduxjs/toolkit';
import search from './search/reducer';

const rootReducer = (): any => combineReducers({ search });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
