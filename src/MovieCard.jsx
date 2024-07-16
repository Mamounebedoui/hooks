import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div ><div className="movie_card" id="bright" style={{ backgroundImage: `url(${movie.backimg})` }} >
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" src={movie.posterURL} alt="pic"/>
        <h1>{movie.title}</h1>
        <br />
        <p className="genre">{movie.genre}</p>
        <br />
        <span className="rate">{movie.rating}</span>
        <br />
      </div>
      <div className="movie_desc">
        <p class="text">
          {movie.description} 
        </p>
      </div>
      
    </div>
    <div className="blur_back bright_back"></div>
  </div>
  
  
    </div>
  );
};

export default MovieCard;