import { formatTypes } from "./Format.types";

const INITIAL_STATE = {
  currentFormat: "Excel",
};

export const formatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case formatTypes.SET_CURRENT_FORMAT:
      return {
        ...state,
        currentFormat: action.payload,
      };
    case formatTypes.DELETE_DATA:
      return { ...INITIAL_STATE };
    default:
      return {
        ...state,
      };
  }
};
