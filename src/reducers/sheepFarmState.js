import { combineReducers } from 'redux'
import user from "./user";

const sheepFarmState = combineReducers({
    user,
});

export default sheepFarmState;