import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesComponent } from './movies.component'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import * as fromMovies from '../../movies/store/movies.reducer'
import { Actions, EffectsModule } from '@ngrx/effects'
import { MoviesEffects } from '../../movies/store/movies.effects'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../../shared/shared.module'
import { MovieComponent } from '../movie/movie.component'

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromMovies.moviesFeatureKey, fromMovies.reducer),
    HttpClientModule,
    EffectsModule.forFeature([MoviesEffects]),
    SharedModule
  ],
  providers: [HttpClient, Actions]
})
export class MoviesModule {}
