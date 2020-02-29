import { all } from 'redux-saga/effects';
import search from './search/sagas';
import flatList from './flatList/sagas';

export default function* root(): void {
  yield all([...search, ...flatList]);
}
