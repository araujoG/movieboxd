import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Observable, Subject, map, switchMap, takeUntil } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { SortingOptions } from '../../enums/sorting-options';
import { Movie } from '@interfaces/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies$! : Observable<Movie[]>;
  currentWatchList : string[] = [];
  ngUnsubscribe = new Subject<void>();

  form = new FormGroup({
    sorting_by: new FormControl<SortingOptions>(SortingOptions.TITLE)
  })

  constructor(
    private movieService : MovieService,
    private watchlistService: WatchlistService
  ) { }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this.addWatchlistChangeListener();
    this.movies$ = this.movieService.getAllMovies();
  }

  addWatchlistChangeListener() : void {
    this.watchlistService.currentWatchlist$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe({
      next: (watchlist : string[]) => {
        this.currentWatchList = watchlist;
      }
    })
  }

  handleWatchlistMovieToggle(movieId: string) :void {
    this.watchlistService.toggleMovieInWatchlist(movieId);
  }

  isMovieInWatchlist(movieId : string) : boolean {
    return this.currentWatchList.includes(movieId);
  }
}
