// TODO: add api key to .env file
const API_KEY = "a9739b3415c360505a7d1db19829fe66";

const API_ENDPOINT = {
  GET_POPULAR: (page) => `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  GET_NOW_PLAYING: (page) => `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  GET_UPCOMING: (page) => `movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
  GET_TOP_RATED: (page) => `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
  SEARCH_MOVIES: (query, page) => `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  GET_MOVIE_DETAIL: (movieId) => `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  GET_MOVIE_CREDITS: (movieId) => `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  GET_MOVIE_RECOMMENDATIONS: (movieId) => `movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US`,
  GET_MOVIE_VIDEOS: (movieId) => `movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
};

export default API_ENDPOINT;
