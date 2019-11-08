import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  findWhat = '';

  searchPlaceholder: string;

  randomGenre() {
    const strPrefix = 'eg ';
    const arrGenres = ['Blues', 'Rock', 'Country', 'Metal', 'Punk'];
    return strPrefix.concat(arrGenres[Math.floor(arrGenres.length * Math.random())]);
  }

  constructor() {
    this.searchPlaceholder = this.randomGenre();
  }

  ngOnInit() {
  }

  enableBandSearch() {
    this.findWhat = 'bands';
  }

  enableShowSearch() {
    this.findWhat = 'shows';
  }

  enableVenueSearch() {
    this.findWhat = 'venues';
  }

  clearSearchMode() {
    this.findWhat = '';
  }
}
