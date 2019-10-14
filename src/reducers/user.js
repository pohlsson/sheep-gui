import {apiActionTypes} from "actions/apiActions";

const MAX_HAPPINESS = 100;

const initialState = {
    happiness: MAX_HAPPINESS,
};

const user = (state = initialState, action) => {
    switch (action) {
        case apiActionTypes.LOG_IN:
            console.log("LOG IN USING " + action.payload.username);
            return state;
        default:
            return state;
    }
};

export default user;