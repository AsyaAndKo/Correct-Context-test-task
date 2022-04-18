import { formatTypes } from "./Format.types";

export const setCurrentFormat = (currentFormat) => ({
  type: formatTypes.SET_CURRENT_FORMAT,
  payload: currentFormat,
});

export const setInitialFormat = () => ({
  type: formatTypes.DELETE_DATA,
});
