// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
//  Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};
// Initial State
const initialState = {
  number: 0,
};
// Reducer
const counter = (state = initialState, action) => {
  // if (action.type === ADD_NUMBER) {
  //   return (state = state.number + action.payload);
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};
// export default reducer
export default counter;
