import {call} from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing';
import * as apiCalls from 'api/apiCalls';
import {logIn} from '../apiSagas';

describe('Api Sagas', () => {

    const action = {
        type: '',
        payload: {
            userData: 'test.com'
        }
    };

    const it = sagaHelper(logIn(action));

    it('Should send log in request correctly', result => {
        expect(result).toStrictEqual(call(apiCalls.put, 'localhost:8080/login', action.payload.userData))
    });
});