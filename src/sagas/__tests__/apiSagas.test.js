import {call, put} from 'redux-saga/effects'
import {apiActionTypes} from 'actions/apiActions';
import * as apiCalls from 'api/apiCalls';
import {logIn} from '../apiSagas';
import {SUCCEEDED} from 'actions/actionState';

const CORS_PROXY_URL = "127.0.0.1:4000";
const BACKEND_URL = "127.0.0.1:8080";

describe('Api Sagas', () => {

  it('Should dispatch succeeded log in action', () => {
    const action = {
      type: '',
      payload: {
        userData: 'test.com'
      }
    };
    const returnValue = {
      body: [],
    };
    const target = logIn(action);

    const apiCall = target.next().value;
    const successAction = target.next(returnValue).value;

    expect(apiCall).toStrictEqual(call(apiCalls.put, {
      url: "http://" + CORS_PROXY_URL + "/" + BACKEND_URL + "/login",
      data: action.payload,
    }));
    expect(successAction).toStrictEqual(put({
      type: apiActionTypes.LOG_IN + SUCCEEDED,
      payload: {
        sheep: returnValue.body
      },
    }));
  });
});