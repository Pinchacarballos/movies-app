import { createAction, props } from '@ngrx/store'

export const findById = createAction(
  '[Actor] Find By Ids',
  props<{ actorIds: number[] }>()
)
