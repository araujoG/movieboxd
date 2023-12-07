import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@interfaces/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  movie!: Movie;
  showTrailer = false;

  constructor(
    private route : ActivatedRoute
  ) {}

  ngOnInit() {
    this.movie = this.route.snapshot.data['movie'];
  }

  toggleTrailer() {
    this.showTrailer = !this.showTrailer;
  }
}
