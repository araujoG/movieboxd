import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { movieResolver } from './services/movie.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter([{
      path: 'movies/:movie-id',
      component: MovieDetailsComponent,
      resolve: { movie: movieResolver }
    }])
  ]
})
export class MovieRoutingModule { }
