import { combineReducers } from '@reduxjs/toolkit';
import search from './search/reducer';
import flatList from './flatList/reducer';

const rootReducer = combineReducers({ search, flatList });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
