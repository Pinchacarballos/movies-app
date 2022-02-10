import { createFeatureSelector, createSelector } from '@ngrx/store'
import { actorFeatureKey, ActorState } from './actor.reducer'

export const getActorState = createFeatureSelector<ActorState>(actorFeatureKey)

export const getActors = createSelector(
  getActorState,
  (state: ActorState) => state
)
