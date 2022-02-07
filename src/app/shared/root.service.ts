import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { combineLatest, Observable, tap } from 'rxjs'
import { AppState } from './root.reducer'
import * as AppActions from './root.actions'
import * as AppSelectors from './root.selectors'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private store: Store<AppState>) {}

  setTitle(title: string) {
    this.store.dispatch(AppActions.setAppTitle({ title }))
  }

  getTitle$(): Observable<string> {
    return this.store.select(AppSelectors.getTitle)
  }
}
