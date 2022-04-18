import { nameTypes } from "./RepName.types";

const INITIAL_STATE = {
  currentName: "",
};

export const nameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case nameTypes.SET_CURRENT_NAME:
      return {
        ...state,
        currentName: action.payload,
      };
    case nameTypes.DELETE_DATA:
      return { ...INITIAL_STATE };
    default:
      return {
        ...state,
      };
  }
};
