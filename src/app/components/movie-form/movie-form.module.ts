import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MovieFormComponent } from './movie-form.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core'
import { StoreModule } from '@ngrx/store'
import * as fromMovie from '../../movie/store/movie.reducer'
import { EffectsModule } from '@ngrx/effects'
import { MovieEffects } from 'src/app/movie/store/movie.effects'

const routes: Routes = [
  {
    path: '',
    component: MovieFormComponent
  }
]

@NgModule({
  declarations: [MovieFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    StoreModule.forFeature(fromMovie.movieFeatureKey, fromMovie.reducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MovieFormModule {}
