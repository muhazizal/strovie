# Strovie

A Vue 2 + Vuetify movie browser powered by The Movie Database (TMDB) API. Browse categories, search titles, view detailed pages with trailers and recommendations, and enjoy a responsive UI with dark/light themes and PWA support.

## Overview

- Browse categories: `Popular`, `Now Playing`, `Upcoming`, `Top Rated`
- Search movies via the route-driven query (`/search?title=...`)
- Infinite scroll on list pages using a bottom-of-page detector
- Client-side filters on lists: Title, Release Date, Rating, Vote Count
- Detailed movie pages with overview, genres, runtime, rating, and votes
- Watch trailers via YouTube embed
- Recommendation lists with pagination
- Dark/light theme toggle (Vuetify)
- PWA: service worker precaching and offline support

## Tech Stack

- Vue 2, Vue Router, Vuex
- Vuetify (Material Design UI)
- Axios for HTTP requests
- Lodash (`uniqBy`) for de-duplication
- Vue CLI PWA plugin + Workbox (`InjectManifest`)
- `vue-youtube-embed` for trailers
- Netlify-friendly redirects for history mode

## Getting Started

- Install dependencies: `npm install`
- Run development server: `npm run serve`
- Build for production: `npm run build`
- Lint and fix: `npm run lint`

Requirements: Node.js 14+ and npm.

## Configuration

The app uses TMDB v3 API. Endpoints are defined in `src/global/api-endpoint.js` and Axios is configured with `baseURL` in `src/plugins/axios-config.js`.

Note: The API key is currently hard-coded in `src/global/api-endpoint.js`. For production-grade setups, prefer environment variables:

1. Create `.env.local` and add:
   ```
   VUE_APP_TMDB_API_KEY=your_tmdb_api_key
   ```
2. Update `src/global/api-endpoint.js` to read `process.env.VUE_APP_TMDB_API_KEY`.

## Project Structure (key paths)

```
src/
  App.vue                    # App shell (Vuetify layout)
  main.js                    # Vue bootstrapping
  plugins/
    axios-config.js          # Axios instance (TMDB base URL)
    vuetify.js               # Vuetify theme config (dark/light)
  router/
    index.js                 # Routes (history mode)
  store/
    index.js                 # Root store (loading state)
    modules/
      movies/                # List pages (popular, now playing, upcoming, top rated)
        actions.js           # Fetch lists, dispatch set helpers
        mutations.js         # Merge pages, de-duplicate with uniqBy
        getters.js           # Selectors for list states
        index.js             # Module state scaffold
      movie/                 # Single movie feature (detail, videos, recommendations)
        actions.js           # Fetch detail, recommendations, videos
        mutations.js         # Store detail, merge recommendations
        getters.js           # Selectors for detail and media
        index.js             # Module state scaffold
  components/
    Navigation/              # Top bar + drawer, theme toggle
    Movie/                   # List, item, poster, overview, filters, videos
  views/Movies/              # Pages: Popular, NowPlaying, Upcoming, TopRated, Search, Movie
  utils/scroll.js            # `bottomVisible` utility for infinite scroll
  service-worker.js          # Workbox InjectManifest (precaching)
```

## Routing & Deployment

- Vue Router uses `history` mode. A `public/_redirects` file (`/* /index.html 200`) ensures client-side routing works on Netlify and similar hosts.
- PWA is enabled in `vue.config.js` via Workbox `InjectManifest` pointing to `src/service-worker.js`.

## Data Flow

- HTTP: Axios instance with `baseURL=https://api.themoviedb.org/3/`; endpoints are composed in `src/global/api-endpoint.js`.
- State: Vuex modules `movies` and `movie` manage lists and details; actions fetch data, mutations merge paginated results and ensure unique items (`uniqBy`).
- UI: List pages show skeletons while loading; infinite scrolling triggers next-page fetches using `utils/bottomVisible` and a local `page` counter.
- Filters: Simple client-side sort on `movies.items` by title, date, rating, and vote count.

## Notes & Improvements

- Move the TMDB API key to environment variables (see Configuration).
- Add a Favorites page or remove the drawer link to `/favorites` until implemented.
- Consider centralizing error handling for Axios requests and surfacing user-friendly messages.
- Add unit/integration tests and CI as needed.

## Acknowledgments

Data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). UI by Vuetify.
