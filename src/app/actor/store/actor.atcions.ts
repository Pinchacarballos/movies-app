import { createAction, props } from '@ngrx/store'
import { Actor } from '../model/actor'

export const findById = createAction(
  '[Actor] Find By Ids',
  props<{ actorIds: number[] }>()
)

export const loadActors = createAction('[Actor] Load All')

export const loadActorsSuccess = createAction(
  '[Actor] Load All Success',
  props<{ actors: Actor[] }>()
)

export const loadActorsError = createAction(
  '[Actor] Load All Error',
  props<{ actors: Actor[] }>()
)
