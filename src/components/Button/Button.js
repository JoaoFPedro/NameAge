import React from "react";
import { Container } from "../Button/Style";

function Button(props) {
  return (
    <Container>
      <button type={props.type || "button"} onClick={props.onClick}>
        {props.children}
      </button>
    </Container>
  );
}
export default Button;
