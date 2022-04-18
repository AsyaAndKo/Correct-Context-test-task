import { schedulerTypes } from "./Scheduler.types";

const INITIAL_STATE = {
  scheduler: "No Repeat",
  date: "",
  day: "",
  time: "",
};

export const schedulerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case schedulerTypes.SET_CURRENT_SCHEDULER:
      return {
        ...state,
        scheduler: action.payload,
      };
    case schedulerTypes.SET_CURRENT_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case schedulerTypes.SET_CURRENT_DAY:
      return {
        ...state,
        day: action.payload,
      };
    case schedulerTypes.SET_CURRENT_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case schedulerTypes.DELETE_DATA:
      return { ...INITIAL_STATE };
    default:
      return {
        ...state,
      };
  }
};
