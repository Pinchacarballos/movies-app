import { createFeatureSelector, createSelector } from "@ngrx/store";
import { moviesFeatureKey, MoviesState } from "./movies.reducer";

export const getMoviesState = createFeatureSelector<MoviesState>(moviesFeatureKey)

export const getMoviesList = createSelector(
    getMoviesState,
    (state: MoviesState) => state.movies
)

export const getLoading = createSelector(
    getMoviesState,
    (state: MoviesState) => state.loading
)