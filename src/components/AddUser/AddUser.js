import React, { useState } from "react";
import Button from "../Button/Button";
import { Container } from "./Style";

function AddUser(props) {
  const [EnteredName, setEnteredName] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      return;
    }
    if (EnteredAge < 0) {
      return;
    }
    console.log(EnteredName, EnteredAge);
    setEnteredAge("");
    setEnteredName("");
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      <Container>
        <form className="formInput" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={nameChangeHandler}
            value={EnteredName}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            onChange={AgeChangeHandler}
            value={EnteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Container>
    </>
  );
}

export default AddUser;
