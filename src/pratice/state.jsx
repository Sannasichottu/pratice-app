import React from "react";
import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });

  const increaseThree = () => {
    for (let i = 0; i < 3; i++) {
      setCount((PrevState) => PrevState + 1);
    }
  };
  return (
    <div>
      <h2 style={{ color: "blue" }}>useState</h2>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>current value : {count} </p>

      <hr />

      {/* previous state  */}
      <h2 style={{ color: "blue" }}>Previous State</h2>
      <button onClick={() => increaseThree()}>add 3 :</button>
      <p>current value + 3 : {count} </p>

      <hr />
      {/* state object */}
      <h2 style={{ color: "blue" }}>State Object</h2>
      <input
        type="text"
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        placeholder="Enter your first Name"
      />
      <input
        type="text"
        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        placeholder="Enter your last Name"
      />
      <p>FirstName value is : {person.firstName}</p>
      <p>LastName value is : {person.lastName} </p>
    </div>
  );
}
