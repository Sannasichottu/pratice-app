import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

export default function UseRef() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleRef = () => {
    counterRef.current++;
  };
  console.log("I'am rending");

  /* Dom */
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  /* prevRef */
  const [inputValue, setInputValue] = useState(" ");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <hr />
      <h2 style={{ color: "red" }}>useRef</h2>
      <h1>{`counter is ${counter}`}</h1>
      <h1>{`Ref is ${counterRef.current}`}</h1>
      <button onClick={handleClick}>Counter</button>
      <button onClick={handleRef}>Ref</button>

      <hr />
      {/* DOM */}

      <h2 h2 style={{ color: "red" }}>
        Dom Ref
      </h2>
      <input ref={textRef} type="text" />

      {/* prevRef */}
      <h2 h2 style={{ color: "red" }}>
        Prev Ref
      </h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.current)}
      />
      <h3>current value : {inputValue}</h3>
      <h3>prev Value : {prevRef.current}</h3>
    </div>
  );
}
