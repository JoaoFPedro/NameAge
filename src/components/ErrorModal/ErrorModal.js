import React from "react";
import Button from "../Button/Button";
import { Container } from "./styles";

function ErrorModal(props) {
  return (
    <Container className="modal">
      <div onClick={props.onConfirm}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </Container>
  );
}

export default ErrorModal;
