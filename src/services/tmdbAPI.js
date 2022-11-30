function fetchMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=78513e51413b500161b2afc1faf7cd3f`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('There an error has occured'));
  });
}

async function getMovieDetails(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=78513e51413b500161b2afc1faf7cd3f`
  );
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(new Error('There an error has occured'));
}

function getMovieCredits(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=78513e51413b500161b2afc1faf7cd3f`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('There an error has occured'));
  });
}

function getMovieReviews(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=78513e51413b500161b2afc1faf7cd3f`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('There an error has occured'));
  });
}

const api = {
  fetchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default api;
