import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, takeUntil, tap } from 'rxjs'
import { Movie } from '../model/movie'
import * as MoviesActions from './movies.atcions'
import * as MoviesSelectors from './movies.selectors'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private store: Store<Movie>) {}

  loadMovies() {
    this.store.dispatch(MoviesActions.loadMovies())
  }

  getMoviesList$(): Observable<Movie[]> {
    this.store
      .select(MoviesSelectors.getMoviesList)
      .pipe(tap((data) => !data.length && this.loadMovies()))
      .subscribe()
    return this.store.select(MoviesSelectors.getMoviesList)
  }

  isLoading$(): Observable<boolean> {
    return this.store.select(MoviesSelectors.getLoading)
  }

  hasError$(): Observable<string> {
    return this.store.select(MoviesSelectors.getError)
  }
}
