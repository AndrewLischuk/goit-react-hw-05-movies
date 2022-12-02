import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import movieAPI from '../../services/tmdbAPI';
import styles from '../Home/Home.module.css';

export const Movies = () => {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    query !== ''
      ? movieAPI.getMovieBySearch(query).then(data => {
          setSearchMovies(data.results);
        })
      : setSearchMovies([]);
  }, [query]);

  const handleQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div>
      {!movieId && <Searchbar handleQuery={handleQuery} queryValue={query} />}
      <div className={styles.movieList}>
        {!movieId &&
          searchMovies.length !== 0 &&
          searchMovies.map(
            ({ id, original_title: title, poster_path: poster }) => (
              <NavLink
                to={`${id}`}
                key={id}
                state={{ from: location }}
                className={styles.movieItem}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster}`}
                  alt="alt logo"
                />
                <p>{title}</p>
              </NavLink>
            )
          )}
      </div>
      <Outlet />
    </div>
  );
};
