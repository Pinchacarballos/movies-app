import { Action, createReducer, on } from '@ngrx/store'
import { Actor } from 'src/app/actor/model/actor'
import { Company } from 'src/app/company/model/company'
import { Movie } from '../../movie/model/movie'
import * as MovieActions from './movie.atcions'

export const movieFeatureKey = 'movie'

export interface MovieState {
  movie?: Movie
  actors?: Actor[]
  company?: Company
  loadingActors: boolean
  loadingCompany: boolean
}

export const initialState: MovieState = {
  loadingActors: false,
  loadingCompany: false
}

const movieReducer = createReducer(
  initialState,
  on(MovieActions.setSelected, (state, { movie }) => {
    return { ...state, movie, actors: [], company: undefined }
  }),
  on(MovieActions.findActors, (state) => {
    return { ...state, loadingActors: true }
  }),
  on(MovieActions.findActorsSuccess, (state, { actors }) => {
    return { ...state, actors, loadingActors: false }
  }),
  on(MovieActions.findActorsError, (state, { actors }) => {
    return { ...state, actors, loadingActors: false }
  }),
  on(MovieActions.findCompany, (state) => {
    return { ...state, loadingCompany: true }
  }),
  on(MovieActions.findCompanySuccess, (state, { company }) => {
    return { ...state, company, loadingCompany: false }
  }),
  on(MovieActions.findCompanyError, (state) => {
    return { ...state, company: undefined, loadingCompany: false }
  })
)

export const reducer = (state: MovieState | undefined, action: Action) => {
  return movieReducer(state, action)
}
