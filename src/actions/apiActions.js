export const apiActionTypes = {
    LOG_IN: 'LOG_IN'
};

export const logIn = payload => ({
    type: apiActionTypes.LOG_IN,
    payload,
});