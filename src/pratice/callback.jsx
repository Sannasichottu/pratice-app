import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Callback2 from "./callback2";

export default function Callback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((e) => e + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <hr />
      <h2 style={{ color: "purple" }}>Callback</h2>
      <Callback2 todos={todos} addTodo={addTodo} />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
