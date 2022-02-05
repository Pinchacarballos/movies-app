import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MovieFormComponent } from './movie-form.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: MovieFormComponent
  }
]

@NgModule({
  declarations: [MovieFormComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class MovieFormModule {}
