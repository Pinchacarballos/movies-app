import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesComponent } from './movies.component'
import { RouterModule, Routes } from '@angular/router'
import { Actions, EffectsModule } from '@ngrx/effects'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../../shared/shared.module'
import { MovieComponent } from '../movie/movie.component'
import { StoreModule } from '@ngrx/store'
import * as fromMovies from '../../movies/store/movies.reducer'
import { MoviesEffects } from 'src/app/movies/store/movies.effects'

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
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature(fromMovies.moviesFeatureKey, fromMovies.reducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [HttpClient, Actions]
})
export class MoviesModule {}
