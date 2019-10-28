import { combineReducers } from 'redux-starter-kit';

const rootReducer = (): any => combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
