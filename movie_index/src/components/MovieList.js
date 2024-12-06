import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMovies = filteredMovies.length;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  return (
    <div className="movie-list-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={ searchTerm }
        onChange={ (e) => setSearchTerm(e.target.value) }
        className="search-box"
      />

      <div className="movie-grid">
        { currentMovies.map((movie) => (
          <MovieCard key={ movie.id } movie={ movie } />
        )) }
      </div>

      <div className="pagination">
        <button
          disabled={ currentPage === 1 }
          onClick={ () => setCurrentPage((prev) => prev - 1) }
        >
          Previous
        </button>
        <span>
          Page { currentPage } of { totalPages }
        </span>
        <button
          disabled={ currentPage === totalPages }
          onClick={ () => setCurrentPage((prev) => prev + 1) }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
