import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import {Link} from 'react-router-dom';

function Movie({ year, title, summary, poster, genres }) {
    return (
      <div className="movie">
        <Link
          to={{
            pathname:'/detail',
            state: {year, title, summary, poster, genres}
          }}  
        >
          <img src={poster} alt={title} title={title}/>
          <div className="movie_data">
              <h3 className="movie_title">{title}</h3>
              <h5 className="movie_year">{year}</h5>
              <p className="movie_summary">{summary.slice(0, 180)}...</p>
              <ul className="movie_genres">              
                {genres.map((genre, idx) => {
                  return <li key={idx} className="movie_genre">{genre}</li>;
                })}
              </ul>
          </div>
        </Link>
      </div>
      
    );   
}

Movie.propTypes = { 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;