const API_KEY = "a9739b3415c360505a7d1db19829fe66";

const API_ENDPOINT = {
  GET_POPULAR: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  GET_NOW_PLAYING: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  GET_UPCOMING: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  GET_TOP_RATED: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  SEARCH_MOVIES: (query) => `search/movie?api_key=${API_KEY}&query=${query}`,
  GET_MOVIE_DETAIL: (movieId) => `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  GET_MOVIE_CREDITS: (movieId) => `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
};

export default API_ENDPOINT;
