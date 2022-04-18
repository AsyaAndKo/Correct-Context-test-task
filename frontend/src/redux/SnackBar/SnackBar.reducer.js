import { snackBarTypes } from "./SnackBar.types";

const INITIAL_STATE = {
  open: "close",
  color: "",
  message: "",
  image: "",
};

export const snackBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case snackBarTypes.SET_OPEN:
      return {
        ...state,
        open: action.payload.open,
        color: action.payload.color,
        message: action.payload.message,
        image: action.payload.image,
      };
    default:
      return { ...state };
  }
};
