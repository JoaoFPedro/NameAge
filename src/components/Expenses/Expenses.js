import React from "react";
import { Container } from "./Styles";

function Expenses(props) {
  return (
    <Container>
      {props.expenses.map((user, index) => (
        <div key={index}>
          <p>
            {user.name}, ({user.age} years old)
          </p>
        </div>
      ))}
    </Container>
  );
}

export default Expenses;
