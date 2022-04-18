import { schedulerTypes } from "./Scheduler.types";

export const setCurrentScheduler = (currentScheduler) => ({
  type: schedulerTypes.SET_CURRENT_SCHEDULER,
  payload: currentScheduler,
});

export const setCurrentDate = (currentDate) => ({
  type: schedulerTypes.SET_CURRENT_DATE,
  payload: currentDate,
});

export const setCurrentDay = (currentDay) => ({
  type: schedulerTypes.SET_CURRENT_DAY,
  payload: currentDay,
});

export const setCurrentTime = (currentTime) => ({
  type: schedulerTypes.SET_CURRENT_TIME,
  payload: currentTime,
});

export const setInitialScheduler = () => ({
  type: schedulerTypes.DELETE_DATA,
});
