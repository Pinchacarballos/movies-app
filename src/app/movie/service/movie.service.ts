import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Movie } from '../model/movie'
import { MovieEdit } from '../model/movieEdit'
import * as MovieActions from '../store/movie.atcions'
import { MovieState } from '../store/movie.reducer'
import * as MovieSelectors from '../store/movie.selectors'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private store: Store<MovieState>) {}

  setSelected(movie: Movie) {
    this.store.dispatch(MovieActions.setSelected({ movie }))
  }

  getSelected$() {
    return this.store.select(MovieSelectors.getMovieSelected)
  }

  removeSelected() {
    this.store.dispatch(MovieActions.setSelected({ movie: undefined }))
  }

  findActors(actorIds: number[]) {
    this.store.dispatch(MovieActions.findActors({ actorIds }))
  }

  getActors$() {
    return this.store.select(MovieSelectors.getActors)
  }

  findCompany(movieId: number) {
    this.store.dispatch(MovieActions.findCompany({ movieId }))
  }

  getCompany$() {
    return this.store.select(MovieSelectors.getCompany)
  }

  isLoadingActors$() {
    return this.store.select(MovieSelectors.isLoadingActors)
  }

  isLoadingCompany$() {
    return this.store.select(MovieSelectors.isLoadingCompany)
  }

  getMovieData$() {
    return this.store.select(MovieSelectors.allData)
  }

  save(movieData: MovieEdit) {
    console.log(movieData)
  }
}
