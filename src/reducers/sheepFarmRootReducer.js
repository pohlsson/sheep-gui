import {combineReducers} from 'redux'
import sheep from "./sheep";
import ui from "./ui";

const sheepFarmRootReducer = combineReducers({
  sheep: sheep,
  ui: ui,
});

export default sheepFarmRootReducer;