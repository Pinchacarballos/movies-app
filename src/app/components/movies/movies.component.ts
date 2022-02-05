import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { Observable, startWith } from 'rxjs'
import { ToastService } from 'src/app/shared/toast.service'
import { Movie } from '../../movies/model/movie'
import { MoviesService } from '../../movies/sotre/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]>
  public loading$: Observable<boolean>

  constructor(
    private moviesService: MoviesService,
    private toastService: ToastService,
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMoviesList$()
    this.loading$ = this.moviesService.isLoading$()
    this.moviesService.hasError$().subscribe((error) => {
      if (error) {
        this.toastService.error(this.translateService.instant(error))
      }
    })
  }

  openMovie(movie: Movie) {
    this.router.navigate(['detail', movie.id], {
      relativeTo: this.route
    })
  }

  addMovie() {
    this.router.navigate(['new'], {
      relativeTo: this.route
    })
  }
}
