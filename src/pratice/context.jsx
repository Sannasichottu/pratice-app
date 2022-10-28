import React, { useState } from "react";

export default function Context() {
  const [user, setUser] = useState("sannasi");

  return (
    <div>
      <h2 style={{ color: "red" }}>use-context</h2>
      <h1>{`Hello ${user}!`}</h1>
      <hr />
    </div>
  );
}
