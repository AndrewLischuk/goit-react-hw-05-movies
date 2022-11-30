import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import movieAPI from '../../services/tmdbAPI';
import styles from './MovieDetails.module.css';
import * as SC from './MovieDetails.styled.js';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    movieAPI.getMovieDetails(movieId).then(data => {
      setMovie(data);
      console.log(data);
      setMovieGenres(data.genres);
    });
  }, [movieId]);

  const {
    title,
    overview,
    poster_path: poster,
    vote_average: vote,
    backdrop_path: backdrop,
  } = movie;
  return (
    <main className={styles.movieItem}>
      <div className={styles.overview}>
        <img
          className={styles.backdrop}
          src={`https://image.tmdb.org/t/p/original/${backdrop}`}
          alt="backdrop"
        />
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt="poster"
        />
        <div className={styles.descr}>
          <h2>{title}</h2>
          <p>
            <span>Overview: </span>
            {overview}
          </p>
          <p>
            <span>User count: </span>
            {vote}
          </p>
          <p>
            <span>Genres: </span>
            {movieGenres.map(({ name }) => `${name}, `)}
          </p>
        </div>
      </div>
      <SC.Nav>
        <SC.NavItem to="credits">Cast</SC.NavItem>
        <SC.NavItem to="reviews">Reviews</SC.NavItem>
      </SC.Nav>
      <Outlet />
    </main>
  );
};
