import { takeLatest, call, put, select, fork } from 'redux-saga/effects';
import {
  getDataSearch,
  getDataSearchSuccess,
  getDataSearchFailure,
} from './reducer';
import { searchYelp } from 'api/yelp';


export function* getDataSearchSaga({payload}) {
  try {
    console.log(payload);
    const response = yield call(
      searchYelp,
      payload.limit,
      payload.term,
      payload.location,
    );
    if (response?.data) {
      yield put(getDataSearchSuccess(response.data));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getDataSearchFailure(err));
  }
}

export default [
  takeLatest(`${getDataSearch}`, getDataSearchSaga),
];
