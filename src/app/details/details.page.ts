import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from './movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  constructor(private readonly router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

}
