import { Link } from 'react-router-dom';

export const Appbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </>
  );
};
