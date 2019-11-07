import {call, put} from 'redux-saga/effects'
import {apiActionTypes} from 'actions/apiActions';
import * as apiCalls from 'api/apiCalls';
import {logIn, getSheep} from './apiSagas';
import {SUCCEEDED} from 'actions/actionState';

const CORS_PROXY_URL = "127.0.0.1:4000";
const BACKEND_URL = "127.0.0.1:8080";

describe('Api Sagas', () => {

  it('Should dispatch succeeded login action', () => {
    const userData = {
      username: 'username',
      password: 'password',
    };
    const action = {
      type: '',
      payload: {
        userData,
      }
    };
    const returnValue = {
      body: 'sheep',
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
        username: userData.username,
        sheep: returnValue.body,
      },
    }));
  });

  it('Should dispatch succeeded get sheep action', () => {
    const username = 'username';
    const action = {
      type: '',
      payload: {
        username,
      }
    };
    const returnValue = {
      body: 'sheep',
    };
    const target = getSheep(action);

    const apiCall = target.next().value;
    const successAction = target.next(returnValue).value;

    expect(apiCall).toStrictEqual(call(apiCalls.get, {
      url: "http://" + CORS_PROXY_URL + "/" + BACKEND_URL + "/sheep?owner=username",
      data: action.payload,
    }));
    expect(successAction).toStrictEqual(put({
      type: apiActionTypes.GET_SHEEP + SUCCEEDED,
      payload: {
        sheep: returnValue.body,
      },
    }));
  });
});