import React, { useState } from "react";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import { Container } from "./Style";

function AddUser(props) {
  const [EnteredName, setEnteredName] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      setError({
        title: "Inavlid Input",
        message: "Please enter a valid input and age (non-empty values)",
      });
      return;
    }
    if (EnteredAge < 1) {
      setError({
        title: "Inavlid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    console.log(EnteredName, EnteredAge);
    console.log(props.userList);
    props.onAddUser(EnteredName, EnteredAge);
    setEnteredAge("");
    setEnteredName("");
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
}

export default AddUser;
