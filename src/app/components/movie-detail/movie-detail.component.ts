import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Observable, Subscriber, Subscription, tap } from 'rxjs'
import { Actor } from '../../actor/model/actor'
import { Company } from '../../company/model/company'
import { AppService } from '../../shared/root.service'
import { Movie } from '../../movie/model/movie'
import { MovieService } from '../../movie/service/movie.service'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie$: Observable<Movie | undefined>
  actors$: Observable<Actor[] | undefined>
  company$: Observable<Company | undefined>

  constructor(
    private movieService: MovieService,
    private appService: AppService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.movie$ = this.movieService
      .getSelected$()
      .pipe(tap((movie) => movie && this.loadRelations(movie)))
    this.actors$ = this.movieService.getActors$()
    this.company$ = this.movieService.getCompany$()
  }

  ngOnDestroy(): void {
    this.appService.setTitle(this.translateService.instant('movies'))
    this.movieService.removeSelected()
  }

  private loadRelations(movie: Movie) {
    this.movieService.findActors(movie.actors)
    this.movieService.findCompany(movie.id)
  }
}
