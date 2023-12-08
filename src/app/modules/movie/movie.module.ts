import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { MovieRoutingModule } from './movie-routing.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { WatchlistIconNamePipe } from './pipes/watchlist-icon-name.pipe';
import { SortMoviesPipe } from './pipes/sort-movies.pipe';


@NgModule({
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    MovieDetailsComponent,
    WatchlistIconNamePipe,
    SortMoviesPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
