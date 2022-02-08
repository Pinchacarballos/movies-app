import { createAction, props } from '@ngrx/store'
import { Actor } from '../actor/model/actor'
import { Company } from '../company/model/company'
import { Movie } from '../movie/model/movie'

export const setAppTitle = createAction(
  '[App] Set Title',
  props<{ title: string }>()
)

export const setMovieEdit = createAction(
  '[App] Set Movie Edit',
  props<{ movie: Movie; company: Company; actors: Actor[] }>()
)
