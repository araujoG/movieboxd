import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@interfaces/movie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import API from '@configs/api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(API(environment).GET.movies);
  }
}
