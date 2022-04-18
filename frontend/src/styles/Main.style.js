import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  padding: 0;
  margin: 10%;

  position: absolute;

  font-size: 18px;
  font-family: "Quicksand", sans-serif;

  display: flex;
  flex-wrap: wrap;

  width: 800px;
  height: fit-content;

  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const DefaultContainer = styled.div`
  margin: 20px;
  width: 100%;
  height: fit-content;
  display: inline;
`;

export const DefaultLabel = styled.label`
  display: inline-block;
  width: 150px;
  margin-right: 30px;
`;

export const AtLabel = styled.label`
  display: inline-block;
  margin: 0 30px;
`;

export const TextInput = styled.input`
  font-size: 18px;
  font-family: "Quicksand", sans-serif;

  display: inline-block;

  width: 30em;
  padding: 10px;
`;

export const DateInput = styled.input`
  width: 10em;
  padding: 10px;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
`;

export const TimeInput = styled.input`
  width: 10em;
  padding: 10px;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
`;

export const RadioInput = styled.input`
  display: inline-block;
`;

export const RadioBtnContainer = styled.div`
  height: fit-content;
  display: inline;
  padding-right: 20px;
`;

export const ButtonContainer = styled.div`
  justify-content: right;
  width: 100%;
  display: flex;
  border-top: 2px lightgray solid;
  padding: 20px;
`;

export const CancelBtn = styled.button`
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  text-transform: capitalize;

  width: 100px;
  height: 50px;

  background-color: white;
  cursor: pointer;
  border: 1px solid black;

  transition: 0.3s;

  &:hover {
    font-size: larger;
  }

  &:active {
    transition: none;
    filter: invert(1);
  }
`;

export const OkButton = styled.button`
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;

  width: 100px;
  height: 50px;
  margin-left: 20px;

  cursor: pointer;
  border: 1px solid white;
  color: white;
  background-color: black;

  transition: 0.3s;

  &:hover {
    font-size: larger;
  }

  &:active {
    transition: none;
    filter: invert(1);
  }
`;

export const SelectDay = styled.select`
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  background-color: white;
  width: 10em;
  padding: 10px;
  border: 2px solid lightgray;
  opacity: 0.7;
`;
