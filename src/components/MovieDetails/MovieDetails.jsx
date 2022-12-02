import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import movieAPI from '../../services/tmdbAPI';
import styles from './MovieDetails.module.css';
import * as SC from './MovieDetails.styled.js';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);
  const location = useLocation();

  useEffect(() => {
    movieAPI.getMovieDetails(movieId).then(data => {
      setMovie(data);
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
  const backLinkHref = location.state?.from ?? '/';
  return (
    <main className={styles.movieItem}>
      <div className={styles.overview}>
        <SC.NavBack to={backLinkHref}>{`<- Go back`}</SC.NavBack>
        <div className={styles.overviewBox}>
          {backdrop && (
            <img
              className={styles.backdrop}
              src={`https://image.tmdb.org/t/p/original/${backdrop}`}
              alt="backdrop"
            />
          )}
          {poster && (
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt="poster"
            />
          )}
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
      </div>
      <SC.Nav>
        <SC.NavItem to="credits" state={{ from: location.state.from }}>
          Cast
        </SC.NavItem>
        <SC.NavItem to="reviews" state={{ from: location.state.from }}>
          Reviews
        </SC.NavItem>
      </SC.Nav>
      <Outlet />
    </main>
  );
};
