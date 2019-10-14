import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from 'serviceWorker';
import { sheepFarmSagas } from 'sagas'
import sheepFarmState from 'reducers/sheepFarmState'
import Provider from "react-redux/lib/components/Provider";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(sheepFarmState,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sheepFarmSagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
