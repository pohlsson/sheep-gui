import {call, put} from 'redux-saga/effects'
import {apiActionTypes} from 'actions/apiActions';
import * as apiCalls from 'api/apiCalls';
import {FAILED, SUCCEEDED} from 'actions/actionState';

const CORS_PROXY_URL = '127.0.0.1:4000';
const BACKEND_URL = '127.0.0.1:8080';

export function* logIn(action) {
  try {
    const data = yield call(apiCalls.put, {
      url: 'http://' + CORS_PROXY_URL + '/' + BACKEND_URL + '/login',
      data: action.payload,
    });
    yield put({
      type: apiActionTypes.LOG_IN + SUCCEEDED, payload: {
        sheep: data.body
      }
    })

  } catch (error) {
    yield put({type: apiActionTypes.LOG_IN + FAILED, payload: error})
  }
}


