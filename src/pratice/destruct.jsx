import React from "react";

export default function Destruct() {
  const movie = ["Beast", "Vijay", "Nelson"];

  const [name, act, direct] = movie;
  return <div>{movie}</div>;
}
