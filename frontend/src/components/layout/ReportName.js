import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentName } from "../../redux/RepName/RepName.actions";
import {
  DefaultContainer,
  DefaultLabel,
  TextInput,
} from "../../styles/Main.style";

export default function ReportName() {
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(setCurrentName(e.currentTarget.value));
  };

  return (
    <DefaultContainer>
      <DefaultLabel>Report name</DefaultLabel>
      <TextInput
        type="text"
        placeholder="Shareablee Report"
        onChange={handleNameChange}
      ></TextInput>
    </DefaultContainer>
  );
}
