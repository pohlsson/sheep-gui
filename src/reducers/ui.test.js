import ui from "./ui";
import {apiActionTypes} from "actions/apiActions";
import {SUCCEEDED} from "actions/actionState";

it('should handle LOG_IN_SUCCEEDED', () => {
  const initialState = {
    loggedIn: false,
    username: "",
  };
  const expectedState = {
    loggedIn: true,
    username: "testUser"
  };
  expect(ui(initialState, {
    type: apiActionTypes.LOG_IN + SUCCEEDED,
    payload: {
      username: "testUser"
    }
  })).toEqual(expectedState);
});