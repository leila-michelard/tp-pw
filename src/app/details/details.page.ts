import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from '../home/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  movie: Movie;

  constructor(private readonly router: Router) {
    this.movie = this.router.getCurrentNavigation().extras.state as Movie;
  }
}
