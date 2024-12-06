import React from "react";
import MovieList from "./components/MovieList";

const App = () => {

  const movies = [
    {
      id: 1,
      title: "Iron Man",
      poster: "/img/1.jpg"
    }
  ]
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movie Posters</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
