import React from "react";
import Button from "../Button/Button";
import { Container } from "./Style";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container>
        <form className="formInput" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"></input>
          <label htmlFor="age">Age (years)</label>
          <input type="text" id="age"></input>
        </form>
        <Button />
      </Container>
    </>
  );
}

export default AddUser;
