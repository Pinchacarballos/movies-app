import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { combineLatest, Observable, tap } from 'rxjs'
import { Movie } from '../../movie/model/movie'
import * as MoviesActions from '../store/movies.atcions'
import { MoviesState } from '../store/movies.reducer'
import * as MoviesSelectors from '../store/movies.selectors'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private store: Store<MoviesState>) {}

  loadMovies() {
    this.store.dispatch(MoviesActions.loadMovies())
  }

  getMoviesList$(): Observable<Movie[]> {
    combineLatest([
      this.hasError$(),
      this.store.select(MoviesSelectors.getMoviesList)
    ])
      .pipe(tap((data) => !data[0] && !data[1].length && this.loadMovies()))
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
