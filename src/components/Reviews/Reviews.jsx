import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../services/tmdbAPI';
import styles from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI.getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <div className={styles.revBlock}>
      {reviews.length === 0 ? (
        <p>There is no reviews on this movie</p>
      ) : (
        reviews.map(({ author, content, id }) => (
          <div key={id} className={styles.revItem}>
            <span>{author}</span>
            <p>{content}</p>
          </div>
        ))
      )}
    </div>
  );
};
