const API_KEY = "a9739b3415c360505a7d1db19829fe66";

const API_ENDPOINT = {
  GET_POPULAR: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  SEARCH_MOVIES: (query) => `search/movie?api_key=${API_KEY}&query=${query}`,
};

export default API_ENDPOINT;
