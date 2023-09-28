import React from "react";
import AddUser from "./components/AddUser/AddUser";
import Expenses from "./components/Expenses/Expenses";
import UserList from "./components/UserList/UserList";

const DummyNames = [
  {
    name: "Jones Pones",
    age: 25,
  },
];

function App(props) {
  return (
    <>
      <AddUser />;
      <Expenses expenses={DummyNames} />
      <UserList users={["teste"]} />
    </>
  );
}

export default App;
