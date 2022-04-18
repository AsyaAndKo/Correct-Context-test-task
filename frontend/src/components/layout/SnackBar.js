import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Close from "../../assets/x.svg";
import { setSnackBarOpen } from "../../redux/SnackBar/SnackBar.actions";
import {
  TickImg,
  CloseButton,
  MessageLabel,
  SnackBarContainer,
} from "../../styles/SnackBar.style";

export default function SnackBar() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.snackBarOpen);
  return (
    <SnackBarContainer open={state.open} color={state.color}>
      <TickImg src={state.image} alt="Tick" />
      <MessageLabel color={state.color}>{state.message}</MessageLabel>
      <CloseButton onClick={() => dispatch(setSnackBarOpen({ open: "close" }))}>
        <img src={Close} alt="close" />
      </CloseButton>
    </SnackBarContainer>
  );
}
