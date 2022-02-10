import { Action, createReducer, on } from '@ngrx/store'
import { Company } from '../../company/model/company'
import * as CompanyActions from './company.atcions'

export const companyFeatureKey = 'company'

export interface CompanyState {
  companies: Company[]
  loading: boolean
  error: string
}

export const initialState: CompanyState = {
  companies: [],
  loading: false,
  error: ''
}

const companyReducer = createReducer(
  initialState,
  on(CompanyActions.loadCompanies, (state) => {
    return { ...state, loading: true, error: '' }
  }),
  on(CompanyActions.loadCompaniesSuccess, (state, { companies }) => {
    return { ...state, companies, loading: false, error: '' }
  }),
  on(CompanyActions.loadCompaniesError, (state, { companies }) => {
    return { ...state, companies, loading: false, error: 'loadCompaniesError' }
  })
)

export const reducer = (state: CompanyState | undefined, action: Action) => {
  return companyReducer(state, action)
}
