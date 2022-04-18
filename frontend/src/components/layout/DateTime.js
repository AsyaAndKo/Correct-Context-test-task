import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentDate,
  setCurrentDay,
  setCurrentTime,
} from "../../redux/Scheduler/Scheduler.actions";
import {
  AtLabel,
  DateInput,
  DefaultContainer,
  DefaultLabel,
  SelectDay,
  TimeInput,
} from "../../styles/Main.style";

export default function DateTime() {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const stateScheduler = useSelector(
    (state) => state.currentScheduler.scheduler
  );

  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    dispatch(setCurrentDate(e.currentTarget.value));
  };

  const handleDayChange = (e) => {
    dispatch(setCurrentDay(e.currentTarget.value));
  };

  const handleTimeChange = (e) => {
    dispatch(setCurrentTime(e.currentTarget.value));
  };

  const SpecificDate = () => {
    return (
      <DefaultContainer>
        <DefaultLabel>Date</DefaultLabel>
        <DateInput type="date" onChange={handleDateChange}></DateInput>
        <AtLabel>at</AtLabel>
        <TimeInput type="time" onChange={handleTimeChange}></TimeInput>
      </DefaultContainer>
    );
  };

  const Daily = () => {
    return (
      <DefaultContainer>
        <DefaultLabel>Everyday at</DefaultLabel>
        <TimeInput type="time" onChange={handleTimeChange}></TimeInput>
      </DefaultContainer>
    );
  };

  const Weekly = () => {
    return (
      <DefaultContainer>
        <DefaultLabel>Every</DefaultLabel>
        <SelectDay onChange={handleDayChange}>
          <option>-- select day --</option>
          {weekDays.map((day) => {
            return <option key={day}>{day}</option>;
          })}
        </SelectDay>
        <AtLabel>at</AtLabel>
        <TimeInput type="time" onChange={handleTimeChange}></TimeInput>
      </DefaultContainer>
    );
  };

  switch (stateScheduler) {
    case "No Repeat":
      return <DefaultContainer></DefaultContainer>;
    case "Specific Date":
      return <SpecificDate />;
    case "Daily":
      return <Daily />;
    case "Weekly":
      return <Weekly />;
    default:
      return <DefaultContainer></DefaultContainer>;
  }
}
