import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatInput } from '@angular/material/input'
import { firstValueFrom, lastValueFrom } from 'rxjs'
import { Actor } from 'src/app/actor/model/actor'
import { AppService } from '../../shared/root.service'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @ViewChild('inputGenre') inputGenre: ElementRef
  movieForm: FormGroup

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm()
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
      const { movie, company, actors } = JSON.parse(JSON.stringify(movieData))
      this.movieForm.patchValue({
        title: movie?.title,
        poster: movie?.poster,
        genre: movie?.genre,
        actors: actors?.map((actor: Actor) => actor.id),
        company: company,
        year: movie?.year,
        duration: movie?.duration,
        imdbRating: movie?.imdbRating
      })
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
}
