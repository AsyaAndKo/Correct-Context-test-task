import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFormat } from "../../redux/Format/Format.actions";
import {
  DefaultContainer,
  DefaultLabel,
  RadioBtnContainer,
  RadioInput,
} from "../../styles/Main.style";

export default function Format(props) {
  const formatState = useSelector((state) => state.currentFormat.currentFormat);

  const dispatch = useDispatch();

  const isFormatChecked = (name) => {
    return formatState === name;
  };

  const handleFormatClicked = (e) => {
    dispatch(setCurrentFormat(e.currentTarget.value));
  };

  return (
    <DefaultContainer>
      <DefaultLabel>Format</DefaultLabel>
      {props.data.map((value) => {
        return (
          <RadioBtnContainer key={value}>
            <RadioInput
              type="radio"
              value={value}
              name={value}
              checked={isFormatChecked(value)}
              onChange={handleFormatClicked}
            />
            {value}
          </RadioBtnContainer>
        );
      })}
    </DefaultContainer>
  );
}
