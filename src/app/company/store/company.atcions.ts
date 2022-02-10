import { createAction, props } from '@ngrx/store'
import { Company } from '../../company/model/company'

export const loadCompanies = createAction('[Company] Load Movies')

export const loadCompaniesSuccess = createAction(
  '[Company] Load Companies Success',
  props<{ companies: Company[] }>()
)

export const loadCompaniesError = createAction(
  '[Company] Load Companies Error',
  props<{ companies: Company[] }>()
)
