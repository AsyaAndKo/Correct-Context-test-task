import styled from "styled-components";

export const SnackBarContainer = styled.div`
  width: max-content;
  height: 30px;

  display: ${(props) => (props.open === "open" ? `flex` : `none`)};
  justify-content: right;
  align-items: center;
  position: absolute;
  background-color: ${(props) => {
    return props.color;
  }};
  top: 10px;
  right: 10px;

  box-shadow: 5px 5px 5px 5px lightgray;

  border: 3px solid
    ${(props) => {
      return props.color;
    }}; ;
`;

export const TickImg = styled.img`
  display: flex;
  margin-left: 20px;
  width: 20px;
  height: 20px;
`;
export const MessageLabel = styled.label`
  margin: 20px;
  width: max-content;
  height: max-content;
  display: flex;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 20px;

  display: flex;
  float: right;
  border: none;
  background: transparent;

  transition: 0.5s;

  &:hover {
    scale: 1.2;
  }
`;
