import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  favoriteColor = '';
  favoriteColorControl = new FormControl('');
  counter = 0;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes.', changes);
  }

  ngOnInit(): void {
    console.log('init.');
  }
  onClick() {
    console.log(this.favoriteColor);
  }
  onPlus() {
    this.counter = this.counter + 1;
  }
  onMinus() {
    this.counter = this.counter - 1;
  }
}
