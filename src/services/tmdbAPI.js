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
const api = {
  fetchMovies,
};
export default api;
