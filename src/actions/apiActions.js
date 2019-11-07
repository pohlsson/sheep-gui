export const apiActionTypes = {
  LOG_IN: 'LOG_IN',
  GET_SHEEP: 'GET_SHEEP',
};

export const logIn = payload => ({
  type: apiActionTypes.LOG_IN,
  payload,
});

export const getSheep = payload => ({
  type: apiActionTypes.GET_SHEEP,
  payload,
});