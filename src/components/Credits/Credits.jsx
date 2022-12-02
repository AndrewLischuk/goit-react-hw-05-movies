import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../services/tmdbAPI';
import styles from './Credits.module.css';
import blank from '../../images/blank-profile.webp';

export const Credits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieAPI.getMovieCredits(movieId).then(data => {
      setCast(data.cast.slice(0, 5));
    });
  }, [movieId]);
  return (
    <div className={styles.castBlock}>
      {cast.map(({ character, id, name, profile_path: profile }) => (
        <div key={id} className={styles.castItem}>
          <img
            className={styles.castImg}
            src={
              profile === null
                ? blank
                : `https://image.tmdb.org/t/p/w500/${profile}`
            }
            alt="No profile"
          />
          <span>{name}</span>
          <p>Character: {character === '' ? '----' : character}</p>
        </div>
      ))}
    </div>
  );
};
