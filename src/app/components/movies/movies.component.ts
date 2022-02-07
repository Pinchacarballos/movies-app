import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { Observable, Subscription } from 'rxjs'
import { MovieService } from 'src/app/movie/service/movie.service'
import { AppService } from 'src/app/shared/root.service'
import { ToastService } from 'src/app/shared/toast.service'
import { Movie } from '../../movie/model/movie'
import { MoviesService } from '../../movies/service/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies$: Observable<Movie[]>
  public loading$: Observable<boolean>
  private errorSubscription: Subscription

  constructor(
    private moviesService: MoviesService,
    private toastService: ToastService,
    private movieService: MovieService,
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMoviesList$()
    this.loading$ = this.moviesService.isLoading$()
    this.errorSubscription = this.moviesService
      .hasError$()
      .subscribe((error) => {
        if (error) {
          this.toastService.error(this.translateService.instant(error))
        }
      })
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe()
  }

  async openMovie(movie: Movie) {
    this.appService.setTitle(movie.title)
    await this.router.navigate(['detail'], {
      relativeTo: this.route
    })
    this.movieService.setSelected(movie)
  }

  addMovie() {
    this.router.navigate(['new'], {
      relativeTo: this.route
    })
  }
}
