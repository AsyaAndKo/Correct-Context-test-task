import {
  checkInputNotEmpty,
  checkSpecificDateInput,
  checkDailyInput,
  checkWeeklyInput,
} from "../logic";

test("check if input is not empty", () => {
  expect(checkInputNotEmpty("No Repeat")).toBe(true);
  expect(checkInputNotEmpty("")).toBe(false);
});

test("check if SpecificDate schedule has date and time not empty", () => {
  expect(checkSpecificDateInput({ date: "24/02/2022", time: "05:30" })).toBe(
    true
  );
  expect(checkSpecificDateInput({ date: "", time: "05:30" })).toBe(false);
  expect(checkSpecificDateInput({ date: "24/02/2022", time: "" })).toBe(false);
});

test("check if Daily schedule has time not empty", () => {
  expect(checkDailyInput({ time: "05:30" })).toBe(true);
  expect(checkDailyInput({ time: "" })).toBe(false);
});

test("check if Weekly schedule has day and time not empty", () => {
  expect(checkWeeklyInput({ day: "Thursday", time: "05:30" })).toBe(true);
  expect(checkWeeklyInput({ day: "", time: "05:30" })).toBe(false);
  expect(checkWeeklyInput({ day: "Thursday", time: "" })).toBe(false);
});
