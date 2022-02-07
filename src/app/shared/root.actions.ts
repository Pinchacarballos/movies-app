import { createAction, props } from '@ngrx/store'

export const setAppTitle = createAction(
  '[App] Set Title',
  props<{ title: string }>()
)
