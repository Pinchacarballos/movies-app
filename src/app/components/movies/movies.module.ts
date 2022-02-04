import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromMovies from '../../movies/sotre/movies.reducer'
import { Actions, EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../../movies/sotre/movies.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{
  path: '',
  component: MoviesComponent
}]

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromMovies.moviesFeatureKey,
      fromMovies.reduer
    ),
    HttpClientModule,
    EffectsModule.forFeature([MoviesEffects]),
    SharedModule
  ],
  providers: [HttpClient, Actions]
})
export class MoviesModule { }