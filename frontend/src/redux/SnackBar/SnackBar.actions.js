import { snackBarTypes } from "./SnackBar.types";

export const setSnackBarOpen = (setOpen) => ({
  type: snackBarTypes.SET_OPEN,
  payload: setOpen,
});
