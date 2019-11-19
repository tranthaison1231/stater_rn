import { takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { searchYelp, getResultsById } from 'api/yelp';
import { navigate } from 'utils/navigation';
import {
  getDataSearch,
  getDataSearchSuccess,
  getDataSearchFailure,
  getResultById,
  getResultByIdSuccess,
  getResultByIdFailure,
} from './reducer';


export function* getDataSearchSaga({payload}) {
  try {
    const response = yield call(
      searchYelp,
      payload.limit,
      payload.term,
      payload.location,
    );
    if (response?.data) {
      yield put(getDataSearchSuccess(response.data));
      navigate('Square');
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getDataSearchFailure(err));
  }
}


export function* getResultByIdSaga({payload}) {
  try {
    const response = yield call(
      getResultsById,
      payload.id,
    );
    if (response?.data) {
      yield put(getResultByIdSuccess(response.data));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getResultByIdFailure(err));
  }
}

export default [
  takeLatest(`${getDataSearch}`, getDataSearchSaga),
  takeLatest(`${getResultById}`, getResultByIdSaga),
];
