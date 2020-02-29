import { takeLatest, call, put } from 'redux-saga/effects';
import { getFlatListApi } from 'api/flatList';
import { getDataFlatList, getDataFlatListSuccess, setLoading } from './reducer';

export function* getDataFlatListSaga({ payload }): void {
  try {
    yield put(setLoading(true));
    console.log(payload);
    const response = yield call(getFlatListApi, payload);
    if (response.data) {
      yield put(getDataFlatListSuccess(response.data));
      yield put(setLoading(false));
    } else {
      throw response;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    yield put(setLoading(false));
    yield console.error(err);
  }
}

export default [takeLatest(`${getDataFlatList}`, getDataFlatListSaga)];
