import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core'
import { firstValueFrom, Observable } from 'rxjs'
import { ActorState } from 'src/app/actor/store/actor.reducer'
import { CompanyState } from 'src/app/company/store/company.reducer'
import { Actor } from '../../actor/model/actor'
import { ActorService } from '../../actor/service/actor.service'
import { CompanyService } from '../../company/service/company.service'
import { AppService } from '../../shared/root.service'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @ViewChild('inputGenre') inputGenre: ElementRef
  movieForm: FormGroup
  companyState$: Observable<CompanyState>
  actorState$: Observable<ActorState>

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder,
    private actorService: ActorService,
    private companyService: CompanyService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.companyState$ = this.companyService.getAll$()
    this.actorState$ = this.actorService.getAll$()
  }

  private async initializeForm() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      poster: [''],
      genre: [[]],
      actors: [[], Validators.required],
      company: [undefined, Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      imdbRating: ['', Validators.required]
    })
    const movieData = await firstValueFrom(this.appService.getMovieEdit$())
    if (movieData) {
      this.appService.setTitle(movieData.movie.title)
      const { movie, company, actors } = JSON.parse(JSON.stringify(movieData))
      this.movieForm.patchValue({
        title: movie?.title,
        poster: movie?.poster,
        genre: movie?.genre,
        actors: actors?.map((actor: Actor) => actor.id),
        company: company.id,
        year: movie?.year,
        duration: movie?.duration,
        imdbRating: movie?.imdbRating
      })
    } else {
      this.appService.setTitle(this.translateService.instant('newMovie'))
    }
  }

  addGenre(event: any) {
    if (event.keyCode === 13) {
      const actualValue: string[] = this.movieForm.get('genre')?.value
      actualValue.push(event.target.value)
      this.movieForm.patchValue({ genre: actualValue })
      this.inputGenre.nativeElement.value = ''
    }
  }

  remove(genre: string) {
    const actualValue: string[] = this.movieForm.value.genre
    console.log(actualValue)
    const index = actualValue.indexOf(genre)
    if (index >= 0) {
      actualValue.splice(index, 1)
    }
    this.movieForm.patchValue({ genre: actualValue })
  }

  saveMovie() {
    const movieData = this.movieForm.value
    console.log(movieData)
  }
}
