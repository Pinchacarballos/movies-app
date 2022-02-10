import { Action, createReducer, on } from '@ngrx/store'
import { Actor } from '../model/actor'
import * as ActorActions from './actor.atcions'

export const actorFeatureKey = 'actor'

export interface ActorState {
  actors?: Actor[]
  loading: boolean
  error: string
}

export const initialState: ActorState = {
  actors: [],
  loading: false,
  error: ''
}

const actorReducer = createReducer(
  initialState,
  on(ActorActions.loadActors, (state) => {
    return { ...state, loading: true, error: '' }
  }),
  on(ActorActions.loadActorsSuccess, (state, { actors }) => {
    return { ...state, actors, loading: false, error: '' }
  }),
  on(ActorActions.loadActorsError, (state, { actors }) => {
    return { ...state, actors, loading: false, error: 'loadingActorsError' }
  })
)

export const reducer = (state: ActorState | undefined, action: Action) => {
  return actorReducer(state, action)
}
