import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./components/movies/movies.module').then(
        (module) => module.MoviesModule
      )
  },
  {
    path: 'movies/new',
    loadChildren: () =>
      import('./components/movie-form/movie-form.module').then(
        (module) => module.MovieFormModule
      )
  },
  {
    path: 'movies/detail',
    loadChildren: () =>
      import('./components/movie-detail/movie-detail.module').then(
        (module) => module.MovieDetailModule
      )
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
