import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, concatMap, map, of, switchMap } from 'rxjs'
import * as CompanyActions from './company.atcions'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CompanyEffects {
  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.loadCompanies),
      concatMap(() =>
        this.http.get<any>(`${environment.db_url}companies`).pipe(
          map((res) => CompanyActions.loadCompaniesSuccess({ companies: res })),
          catchError((_) =>
            of(CompanyActions.loadCompaniesError({ companies: [] }))
          )
        )
      )
    )
  )

  constructor(private actions$: Actions, private http: HttpClient) {}
}
