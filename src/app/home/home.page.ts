import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from './movie';
import {apiKey} from '../../tmdb';
import {TMDBReponse} from './movie';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Promise<Movie[]> = Promise.resolve([]);

  constructor(
    private readonly router: Router,
    private http: HttpClient
  ) { }

  getMovies(titre: string): void {
    console.log(titre);
    if (titre.length >= 3) {
      this.movies = this.searchMovies(titre);
    } else {
      this.movies = Promise.resolve([]);
    }
  }

  showDetails(m: Movie): void {
    this.router.navigate(['/details'], {state: m});
  }

  private async askTMDB (api: string, params: object): Promise<Movie[]> {
    const { results } = await this.http.get<TMDBReponse>(
      `https://api.themoviedb.org/3/${api}/movie`,
      { params: { api_key: apiKey, ...params} }
    ).toPromise();
    return results;
  }

  private searchMovies (search: string): Promise<Movie[]> {
    return this.askTMDB('search', {query: search});
  }
}
