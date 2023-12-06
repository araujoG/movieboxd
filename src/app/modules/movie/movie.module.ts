import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovieComponent,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
