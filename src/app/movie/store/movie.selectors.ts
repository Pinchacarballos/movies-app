import { createFeatureSelector, createSelector } from '@ngrx/store'
import { movieFeatureKey, MovieState } from './movie.reducer'

export const getMovieState = createFeatureSelector<MovieState>(movieFeatureKey)

export const getMovieSelected = createSelector(
  getMovieState,
  (state: MovieState) => state.movie
)

export const getActors = createSelector(
  getMovieState,
  (state: MovieState) => state.actors
)

export const getCompany = createSelector(
  getMovieState,
  (state: MovieState) => state.company
)

export const isLoadingActors = createSelector(
  getMovieState,
  (state: MovieState) => state.loadingActors
)

export const isLoadingCompany = createSelector(
  getMovieState,
  (state: MovieState) => state.loadingCompany
)

export const allData = createSelector(getMovieState, (state: MovieState) => {
  return { movie: state.movie, company: state.company, actors: state.actors }
})
