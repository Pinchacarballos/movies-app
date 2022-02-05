import { Action, createReducer, on } from '@ngrx/store'
import { Movie } from '../model/movie'
import * as MoviesActions from './movies.atcions'

export const moviesFeatureKey = 'movies'

export interface MoviesState {
  loading: boolean
  movies: Movie[]
  error: string
}

export const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: ''
}

const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.loadMovies, (state) => {
    return { ...state, loading: true }
  }),
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) => {
    return { ...state, movies, loading: false, error: '' }
  }),
  on(MoviesActions.loadMoviesError, (state) => {
    return { ...state, movies: [], loading: false, error: 'loadMoviesError' }
  })
)

export const reduer = (state: MoviesState | undefined, action: Action) => {
  return moviesReducer(state, action)
}
