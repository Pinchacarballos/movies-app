import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MovieDetailComponent } from './movie-detail.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
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
    TranslateModule.forChild()
  ]
})
export class MovieDetailModule {}
