import { nameTypes } from "./RepName.types";

export const setCurrentName = (currentName) => ({
  type: nameTypes.SET_CURRENT_NAME,
  payload: currentName,
});

export const setInitialName = () => ({
  type: nameTypes.DELETE_DATA,
});
