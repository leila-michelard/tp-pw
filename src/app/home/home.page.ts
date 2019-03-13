import { Component } from '@angular/core';
import {Movie} from '../details/movie';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Movie[] = [{title: 'Titre1'}, {title: 'Titre2'}, {title: 'Titre3'}];
}
