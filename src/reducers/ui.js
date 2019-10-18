import {apiActionTypes} from "actions/apiActions";
import {SUCCEEDED} from "actions/actionState";

const initialState = {
  loggedIn: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case apiActionTypes.LOG_IN + SUCCEEDED:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default ui;

