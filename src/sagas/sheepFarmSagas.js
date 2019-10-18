import {fork, takeEvery} from 'redux-saga/effects';
import {apiActionTypes} from 'actions/apiActions';
import {logIn} from './apiSagas.js'

function* watchLogIn() {
  yield takeEvery(apiActionTypes.LOG_IN, logIn);
}

export default function* sheepFarmSagas() {
  yield fork(watchLogIn)
}
