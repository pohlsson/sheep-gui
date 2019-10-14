import {call, put} from 'redux-saga/effects'
import * as apiCalls from 'api/apiCalls';

const BACKEND_PORT = '8080';

export function* logIn(action) {
    try {
        const data = yield call(apiCalls.put, 'localhost:' + BACKEND_PORT + '/login', action.payload.userData);
        yield put({type: "FETCH_SUCCEEDED", data})
    } catch (error) {
        yield put({type: "FETCH_FAILED", error})
    }
}


