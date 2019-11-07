import {fork, takeEvery} from 'redux-saga/effects';
import {apiActionTypes} from 'actions/apiActions';
import {logIn, getSheep} from './apiSagas.js'

function* watchLogIn() {
  yield takeEvery(apiActionTypes.LOG_IN, logIn);
}

function* watchGetSheep() {
  yield takeEvery(apiActionTypes.GET_SHEEP, getSheep);
}

export default function* sheepFarmSagas() {
  yield fork(watchLogIn);
  yield fork(watchGetSheep);
}
