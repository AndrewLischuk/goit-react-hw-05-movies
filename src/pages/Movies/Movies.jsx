import Searchbar from 'components/Searchbar/Searchbar';
import { Outlet, useParams } from 'react-router-dom';

export const Movies = () => {
  const { movieId } = useParams();
  return (
    <div>
      {!movieId && <Searchbar />}
      <Outlet />
    </div>
  );
};
