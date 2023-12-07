import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { MovieRoutingModule } from './movie-routing.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';


@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
