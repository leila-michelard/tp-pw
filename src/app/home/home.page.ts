import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from '../details/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Movie[] = [];

  constructor(private readonly router: Router) {}

  getMovies(titre: string): void {
    console.log(titre);
    if (titre.length >= 3) {
      this.movies = [
        {title : 'Movie1'},
        {title : 'Movie2'}
      ];
    } else {
      this.movies = [];
    }
  }

  showDetails(m: Movie): void {
    this.router.navigate(['/details'], {state: m});

  }
}
