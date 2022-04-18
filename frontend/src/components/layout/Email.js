import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentEmail } from "../../redux/Email/Email.actions";
import {
  DefaultContainer,
  DefaultLabel,
  TextInput,
} from "../../styles/Main.style";

export default function Email() {
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(setCurrentEmail(e.currentTarget.value));
  };

  return (
    <DefaultContainer>
      <DefaultLabel>E-mail to</DefaultLabel>
      <TextInput
        type="text"
        placeholder="client@company.com"
        onChange={handleEmailChange}
      ></TextInput>
    </DefaultContainer>
  );
}
