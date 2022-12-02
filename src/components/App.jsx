import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Credits } from './Credits/Credits';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails.jsx';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
