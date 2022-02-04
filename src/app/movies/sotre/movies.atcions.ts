import { createAction, props } from "@ngrx/store";
import { Movie } from "../model/movie";

export const loadMovies = createAction('[Movies] Load Movies')
export const loadMoviesSuccess = createAction(
    '[Movies] Load Movies Success',
    props<{ movies: Movie[] }>()
)

export const loadMoviesError = createAction(
    '[Movies] Load Movies Error',
    props<{ movies: Movie[] }>()
)