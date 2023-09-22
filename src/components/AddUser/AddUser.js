import React from "react";
import Button from "../Button/Button";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age (years)</label>
        <input type="text" id="age"></input>
      </form>
      <Button />
      {props.expenses.map((user, index) => (
        <div key={index}>
          <p>
            {user.name}, ({user.age} years old)
          </p>
        </div>
      ))}
    </>
  );
}

export default AddUser;
