import React from "react";
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

        <button type="submit"> Add User</button>
      </form>
      {DummyNames.map((user, index) => (
        <div key={index}>
          <p>
            {user.name}, ({user.age} years old)
          </p>
        </div>
      ))}
      ;
    </>
  );
}

export default App;
