import sheep from "reducers/sheep";
import {apiActionTypes} from "../../actions/apiActions";
import {SUCCEEDED} from "../../actions/actionState";

it('should handle LOG_IN_SUCCEEDED', () => {
  const initialState = {
    name: undefined,
    happiness: undefined,
  };
  const payload = {
    sheep: {
      name: "sheep1",
      owner: "owner1",
    }
  };
  const expectedState = {
    name: payload.sheep.name,
    happiness: payload.sheep.happiness,
  };
  expect(sheep(initialState, {
    type: apiActionTypes.LOG_IN + SUCCEEDED,
    payload: payload,
  })).toEqual(expectedState);
});