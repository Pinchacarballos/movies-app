import { Component, OnDestroy, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { firstValueFrom, Observable, Subscription, tap } from 'rxjs'
import { Actor } from '../../actor/model/actor'
import { Company } from '../../company/model/company'
import { AppService } from '../../shared/root.service'
import { Movie } from '../../movie/model/movie'
import { MovieService } from '../../movie/service/movie.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie$: Observable<Movie | undefined>
  actors$: Observable<Actor[] | undefined>
  company$: Observable<Company | undefined>
  loadActors$: Observable<boolean>
  loadCompany$: Observable<boolean>
  movieSubscription: Subscription

  constructor(
    private movieService: MovieService,
    private appService: AppService,
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movie$ = this.movieService
      .getSelected$()
      .pipe(tap((movie) => movie && this.loadRelations(movie)))
    this.actors$ = this.movieService.getActors$()
    this.company$ = this.movieService.getCompany$()
    this.loadActors$ = this.movieService.isLoadingActors$()
    this.loadCompany$ = this.movieService.isLoadingCompany$()
    this.movieSubscription = this.movie$.subscribe((movie) => {
      !movie && this.router.navigateByUrl('/')
    })
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe()
    this.appService.setTitle(this.translateService.instant('movies'))
    this.movieService.removeSelected()
  }

  private loadRelations(movie: Movie) {
    this.movieService.findActors(movie.actors)
    this.movieService.findCompany(movie.id)
  }

  async edit() {
    const movieEdit = {
      movie: (await firstValueFrom(this.movie$))!!,
      company: (await firstValueFrom(this.company$))!!,
      actors: (await firstValueFrom(this.actors$))!!
    }
    this.appService.setMovieEdit(movieEdit)
    await this.router.navigate(['edit'], {
      relativeTo: this.route
    })
  }

  remove() {
    console.log('remove')
  }
}
