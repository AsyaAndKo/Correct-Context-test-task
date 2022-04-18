import { emailTypes } from "./Email.types";

const INITIAL_STATE = {
  currentEmail: "",
};

export const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case emailTypes.SET_CURRENT_EMAIL:
      return {
        ...state,
        currentEmail: action.payload,
      };
    case emailTypes.DELETE_DATA:
      return { ...INITIAL_STATE };
    default:
      return {
        ...state,
      };
  }
};
