import {apiActionTypes} from "actions/apiActions";
import {SUCCEEDED} from "actions/actionState";

const initialState = {
  name: undefined,
  happiness: undefined,
};

const sheep = (state = initialState, action) => {
  switch (action.type) {
    case apiActionTypes.LOG_IN + SUCCEEDED:
      return {
        ...state,
        name: action.payload.sheep.name,
        happiness: action.payload.sheep.happiness,
      };
    default:
      return state;
  }
};

export default sheep;

