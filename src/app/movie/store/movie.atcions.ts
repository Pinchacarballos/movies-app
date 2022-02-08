import { createAction, props } from '@ngrx/store'
import { Actor } from '../../actor/model/actor'
import { Movie } from '../../movie/model/movie'
import { Company } from '../../company/model/company'

export const loadMovies = createAction('[Movies] Load Movies')

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[] }>()
)

export const loadMoviesError = createAction(
  '[Movies] Load Movies Error',
  props<{ movies: Movie[] }>()
)

export const setSelected = createAction(
  '[Movie] Set Selected',
  props<{ movie?: Movie }>()
)

export const findActors = createAction(
  '[Movie] Find Actors',
  props<{ actorIds: number[] }>()
)

export const findActorsSuccess = createAction(
  '[Movie] Find Actors Success',
  props<{ actors: Actor[] }>()
)

export const findActorsError = createAction(
  '[Movie] Find Actors Error',
  props<{ actors: Actor[] }>()
)

export const findCompany = createAction(
  '[Movie] Find Company',
  props<{ movieId: number }>()
)

export const findCompanySuccess = createAction(
  '[Movie] Find Company Success',
  props<{ company?: Company }>()
)

export const findCompanyError = createAction(
  '[Movie] Find Company Error',
  props<{ company?: Company }>()
)
