import React from "react";
import { Container } from "./Styles";

function UserList(props) {
  return (
    <Container>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name}, {user.age} (Years old)
        </li>
      ))}
    </Container>
  );
}

export default UserList;
