import { Action, createReducer, on } from '@ngrx/store'
import { Actor } from '../model/actor'

export const actorFeatureKey = 'actor'

export interface ActorState {
  actors?: Actor[]
}

export const initialState: ActorState = {}

const actorReducer = createReducer(initialState)

export const reducer = (state: ActorState | undefined, action: Action) => {
  return actorReducer(state, action)
}
