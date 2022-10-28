import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Initial message");

  useEffect(() => {
    console.log("component mount / update");
    console.log(msg);
    console.log("count is incresed", count);
  }, [count, msg]);
  return (
    <div>
      <hr />
      <h2 style={{ color: "green" }}>UseEffect</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increse count
      </button>
      <p>The count value is : {count} </p>
      <button
        onClick={() => {
          setMsg("msg update on click");
        }}
      >
        Update msg
      </button>
    </div>
  );
}
