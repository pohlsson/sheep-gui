import sheep from "reducers/sheep";
import {apiActionTypes} from "../actions/apiActions";
import {SUCCEEDED} from "../actions/actionState";

describe('Sheep reducer', () => {

  const INITIAL_STATE = {
    name: undefined,
    happiness: undefined,
  };

  it('should handle LOG_IN_SUCCEEDED', () => {
    const payload = {
      sheep: {
        name: "sheep1",
        owner: "owner1",
        happiness: 10,
      }
    };
    const expectedState = {
      name: payload.sheep.name,
      happiness: payload.sheep.happiness,
    };
    expect(sheep(INITIAL_STATE, {
      type: apiActionTypes.LOG_IN + SUCCEEDED,
      payload: payload,
    })).toEqual(expectedState);
  });

  it('should handle GET_SHEEP_SUCCEEDED', () => {
    const payload = {
      sheep: {
        name: "sheep1",
        owner: "owner1",
        happiness: 10,
      }
    };
    const expectedState = {
      name: payload.sheep.name,
      happiness: payload.sheep.happiness,
    };
    expect(sheep(INITIAL_STATE, {
      type: apiActionTypes.GET_SHEEP + SUCCEEDED,
      payload: payload,
    })).toEqual(expectedState);
  });
});
