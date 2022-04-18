import validator from "validator";

export const checkInputNotEmpty = (input) => {
  return input.length != 0;
};

export const checkEmailIsEmail = (email) => {
  return validator.isEmail(email);
};
export const checkSpecificDateInput = (input) => {
  return input.date.length != 0 && input.time.length != 0;
};

export const checkDailyInput = (input) => {
  return input.time.length != 0;
};

export const checkWeeklyInput = (input) => {
  return input.day.length != 0 && input.time.length != 0;
};
