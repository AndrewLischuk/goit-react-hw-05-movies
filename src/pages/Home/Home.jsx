import { useEffect } from 'react';
import { useState } from 'react';
import movieAPI from '../../services/tmdbAPI';

export const Home = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    movieAPI.fetchMovies().then(data => {
      console.log(data);
    });
  }, []);

  return <div>Trending today</div>;
};
