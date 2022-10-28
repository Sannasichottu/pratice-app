import React from "react";
import { useReducer } from "react";

const initialMov = [
  {
    id: 1,
    title: "Theri",
    complete: false,
  },
  {
    id: 2,
    title: "sita-ramam",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((movie) => {
        if (movie.id === action.id) {
          return { ...movie, complete: !movie.complete };
        } else {
          return movie;
        }
      });
    default:
      return state;
  }
};

export default function Reducer() {
  const [movies, dispatch] = useReducer(reducer, initialMov);

  const handleComplete = (movie) => {
    dispatch({ type: "COMPLETE", id: movie.id });
  };

  return (
    <>
      <h2 style={{ color: "blue" }}>use-reducer</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <label>
            <input
              type="checkbox"
              checked={movie.complete}
              onChange={() => handleComplete(movie)}
            />
            {movie.title}
          </label>
        </div>
      ))}
    </>
  );
}
