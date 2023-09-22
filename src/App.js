import React from "react";
import AddUser from "./components/AddUser/AddUser";

const DummyNames = [
  {
    name: "Jones Pones",
    age: 25,
  },
  {
    name: "Thiago Fragoso",
    age: 12,
  },
];

function App(props) {
  return (
    <>
      <AddUser expenses={DummyNames} />;
    </>
  );
}

export default App;
