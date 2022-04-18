import { emailTypes } from "./Email.types";

export const setCurrentEmail = (currentEmail) => ({
  type: emailTypes.SET_CURRENT_EMAIL,
  payload: currentEmail,
});

export const setInitialEmail = () => ({
  type: emailTypes.DELETE_DATA,
});
