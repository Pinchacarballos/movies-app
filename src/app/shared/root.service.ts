import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { combineLatest, Observable, tap } from 'rxjs'
import { AppState } from './root.reducer'
import * as AppActions from './root.actions'
import * as AppSelectors from './root.selectors'
import { MovieEdit } from '../movie/model/movieEdit'

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

  getMovieEdit$(): Observable<MovieEdit | undefined> {
    return this.store.select(AppSelectors.getMovieEdit)
  }

  setMovieEdit(movieEdit: MovieEdit) {
    this.store.dispatch(AppActions.setMovieEdit(movieEdit))
  }
}
