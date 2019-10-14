import {fork} from "@redux-saga/core/effects";


export default function* sheepFarmSagas() {
    yield fork(saga1)
}
