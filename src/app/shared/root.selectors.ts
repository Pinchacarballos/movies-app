import { createFeatureSelector, createSelector } from '@ngrx/store'
import { appFeatureKey, AppState } from './root.reducer'

export const getAppState = createFeatureSelector<AppState>(appFeatureKey)

export const getTitle = createSelector(
  getAppState,
  (state: AppState) => state.title
)
