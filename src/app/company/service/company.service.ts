import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, tap } from 'rxjs'
import { environment } from '../../../environments/environment'
import { CompanyState } from '../store/company.reducer'
import * as CompanySelectors from '../store/company.selectors'
import * as CompanyActions from '../store/company.atcions'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient, private store: Store<CompanyState>) {}

  loadCompanies() {
    this.store.dispatch(CompanyActions.loadCompanies())
  }

  findByMovie$(movieId: number) {
    return this.http
      .get<any>(`${environment.db_url}companies?movies_like=${movieId}`)
      .pipe(map((company) => company[0]))
  }

  getAll$(): Observable<CompanyState> {
    this.store
      .select(CompanySelectors.getCompanies)
      .pipe(
        tap(
          (data) =>
            !data.loading &&
            !data.error &&
            !data.companies.length &&
            this.loadCompanies()
        )
      )
      .subscribe()
    return this.store.select(CompanySelectors.getCompanies)
  }
}
