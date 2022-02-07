import { Action, createReducer, on } from '@ngrx/store'
import * as RootActions from './root.actions'

export const appFeatureKey = 'app'

export interface AppState {
  title: string
}

export const initialState: AppState = {
  title: ''
}

const rootReducer = createReducer(
  initialState,
  on(RootActions.setAppTitle, (state, { title }) => {
    return { ...state, title }
  })
)

export const reducer = (state: AppState | undefined, action: Action) => {
  return rootReducer(state, action)
}
