import React from "react";
import { Container } from "./Styles";

function UserList(props) {
  return (
    <Container>
      {props.users.map((user) => (
        <li>
          {props.name}, ({props.age} (years old))
        </li>
      ))}
    </Container>
  );
}

export default UserList;
