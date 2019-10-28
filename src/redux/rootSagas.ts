import { all } from 'redux-saga/effects';
import search from './search/sagas';

export default function* root(): any {
  yield all([...search]);
}
