import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails.jsx';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="credits" element={<div>Credits</div>} />
              <Route path="reviews" element={<div>Reviews</div>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
