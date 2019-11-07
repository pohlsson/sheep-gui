import {apiActionTypes} from "actions/apiActions";
import {SUCCEEDED} from "actions/actionState";

const initialState = {
  loggedIn: false,
  username: "",
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case apiActionTypes.LOG_IN + SUCCEEDED:
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default ui;


