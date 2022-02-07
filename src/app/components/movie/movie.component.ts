import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Movie } from '../../movie/model/movie'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input('movie') movie: Movie
  @Output('movieSelected') onSelectMovie = new EventEmitter<Movie>()

  openMovie() {
    this.onSelectMovie.emit(this.movie)
  }
}
