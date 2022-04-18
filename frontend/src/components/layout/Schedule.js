import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScheduler } from "../../redux/Scheduler/Scheduler.actions";
import {
  DefaultContainer,
  DefaultLabel,
  RadioBtnContainer,
  RadioInput,
} from "../../styles/Main.style";

export default function Schedule(props) {
  const selectedSchedule = useSelector(
    (state) => state.currentScheduler.scheduler
  );

  const dispatch = useDispatch();

  const isScheduleChecked = (name) => {
    return selectedSchedule === name;
  };

  const handleScheduleClicked = (e) => {
    dispatch(setCurrentScheduler(e.currentTarget.value));
  };

  return (
    <DefaultContainer>
      <DefaultLabel>Schedule</DefaultLabel>
      {props.data.map((value) => {
        return (
          <RadioBtnContainer key={value}>
            <RadioInput
              type="radio"
              value={value}
              name={value}
              checked={isScheduleChecked(value)}
              onChange={handleScheduleClicked}
            />
            {value}
          </RadioBtnContainer>
        );
      })}
    </DefaultContainer>
  );
}
