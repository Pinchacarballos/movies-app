import { Action, createReducer, on } from '@ngrx/store'
import { MovieEdit } from '../movie/model/movieEdit'
import * as RootActions from './root.actions'

export const appFeatureKey = 'app'

export interface AppState {
  title: string
  movieEdit?: MovieEdit
}

export const initialState: AppState = {
  title: ''
}

const rootReducer = createReducer(
  initialState,
  on(RootActions.setAppTitle, (state, { title }) => {
    return { ...state, title }
  }),
  on(RootActions.setMovieEdit, (state, { movie, company, actors }) => {
    return { ...state, movieEdit: { movie, company, actors } }
  })
)

export const reducer = (state: AppState | undefined, action: Action) => {
  return rootReducer(state, action)
}
