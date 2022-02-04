import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [{
  path: 'movies',
  pathMatch: 'full',
  loadChildren: () => import('./components/movies/movies.module').then(module => module.MoviesModule)
},
{
  path: '',
  redirectTo: '/movies',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
