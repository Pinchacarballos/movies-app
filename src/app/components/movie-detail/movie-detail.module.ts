import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MovieDetailComponent } from './movie-detail.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { StoreModule } from '@ngrx/store'
import * as fromMovie from '../../movie/store/movie.reducer'
import { EffectsModule } from '@ngrx/effects'
import { MovieEffects } from 'src/app/movie/store/movie.effects'
import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: MovieDetailComponent
  }
]

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromMovie.movieFeatureKey, fromMovie.reducer),
    EffectsModule.forFeature([MovieEffects]),
    TranslateModule.forChild()
  ]
})
export class MovieDetailModule {}
