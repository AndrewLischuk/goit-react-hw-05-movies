import { Container } from 'components/Container/Container';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import movieAPI from '../../services/tmdbAPI';
import styles from './Home.module.css';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    movieAPI.fetchMovies().then(data => {
      // console.log(data);
      setTrending(data.results);
    });
  }, []);

  return (
    <Container>
      <h2>Trending today</h2>
      <div className={styles.movieList}>
        {trending.map(({ id, original_title: title, poster_path: poster }) => (
          <NavLink to={`movies/${id}`} key={id} className={styles.movieItem}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt="alt logo"
            />
            <p>{title}</p>
          </NavLink>
        ))}
      </div>
    </Container>
  );
};
