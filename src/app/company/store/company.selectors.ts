import { createFeatureSelector, createSelector } from '@ngrx/store'
import { companyFeatureKey, CompanyState } from './company.reducer'

export const getCompanyState =
  createFeatureSelector<CompanyState>(companyFeatureKey)

export const getCompanies = createSelector(
  getCompanyState,
  (state: CompanyState) => state
)
