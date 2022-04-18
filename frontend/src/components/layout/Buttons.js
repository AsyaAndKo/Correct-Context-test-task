import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  checkDailyInput,
  checkEmailIsEmail,
  checkInputNotEmpty,
  checkSpecificDateInput,
  checkWeeklyInput,
} from "../logic";

import Tick from "../../assets/tick.svg";
import Cross from "../../assets/cross.svg";

import { ButtonContainer, CancelBtn, OkButton } from "../../styles/Main.style";
import { setInitialEmail } from "../../redux/Email/Email.actions";
import { setInitialFormat } from "../../redux/Format/Format.actions";
import { setInitialName } from "../../redux/RepName/RepName.actions";
import { setInitialScheduler } from "../../redux/Scheduler/Scheduler.actions";
import { setSnackBarOpen } from "../../redux/SnackBar/SnackBar.actions";

export default function Buttons() {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  const stateName = useSelector((state) => state.currentName.currentName);
  const stateFormat = useSelector((state) => state.currentFormat.currentFormat);
  const stateEmail = useSelector((state) => state.currentEmail.currentEmail);
  const stateScheduler = useSelector((state) => state.currentScheduler);

  const dispatch = useDispatch();

  const output = {
    name: stateName,
    format: stateFormat,
    email: stateEmail,
    ...stateScheduler,
  };

  const clearAll = () => {
    console.log(stateScheduler.scheduler);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    dispatch(
      setInitialEmail(),
      setInitialFormat(),
      setInitialName(),
      setInitialScheduler()
    );
  };

  const dispatchPopUp = (open, color, message, image) => {
    return dispatch(
      setSnackBarOpen({
        open: open,
        color: color,
        message: message,
        image: image,
      })
    );
  };

  const checkScheduleInputs = (state) => {
    switch (state.scheduler) {
      case "No Repeat":
        return true;
      case "Specific Date":
        if (checkSpecificDateInput(state)) {
          return true;
        } else {
          dispatchPopUp("open", "#f0c2c2", "Input can not be empty!", Cross);
        }
      case "Daily":
        if (checkDailyInput(state)) {
          return true;
        } else {
          dispatchPopUp("open", "#f0c2c2", "Input can not be empty!", Cross);
        }
      case "Weekly":
        if (checkWeeklyInput(state)) {
          return true;
        } else {
          dispatchPopUp("open", "#f0c2c2", "Input can not be empty!", Cross);
        }
      default:
        return false;
    }
  };

  const checkInput = (input) => {
    if (checkInputNotEmpty(input)) {
      return true;
    } else {
      dispatchPopUp("open", "#f0c2c2", "Input can not be empty!", Cross);
      return false;
    }
  };

  const checkEmail = (email) => {
    if (checkInputNotEmpty(email) && checkEmailIsEmail(email)) {
      return true;
    } else {
      dispatchPopUp("open", "#f0c2c2", "Enter valid email!", Cross);
      return false;
    }
  };

  const postInfo = async (output) => {
    try {
      if (
        checkInput(stateName) &&
        checkEmail(stateEmail) &&
        checkScheduleInputs(stateScheduler)
      ) {
        console.log(output);
        const response = await axios.post("api/api/", output);
        if (response.status === 201) {
          dispatchPopUp("open", "#d8edce", "Successfully posted!", Tick);
        } else {
          dispatchPopUp("open", "#f0c2c2", "Something went wrong...", Cross);
        }
        clearAll();
      }
    } catch (e) {
      console.log(e);
      clearAll();
    }
  };

  return (
    <ButtonContainer>
      <CancelBtn onClick={() => clearAll()}>cancel</CancelBtn>
      <OkButton onClick={() => postInfo(output)}>ok</OkButton>
    </ButtonContainer>
  );
}
