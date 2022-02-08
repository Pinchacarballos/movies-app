import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MovieFormComponent } from './movie-form.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core'

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
    TranslateModule.forChild()
  ]
})
export class MovieFormModule {}
