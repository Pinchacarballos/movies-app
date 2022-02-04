import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../movies/model/movie';
import { MoviesService } from '../../movies/sotre/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies$: Observable<Movie[]>
  public loading$: Observable<boolean>

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.loadMovies()
    this.movies$ = this.moviesService.getMoviesList$()
    this.loading$ = this.moviesService.isLoading$()
  }

}
