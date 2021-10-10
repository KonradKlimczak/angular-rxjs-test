import { Component, OnInit } from '@angular/core';
import { appTitle } from '../state';

@Component({
  selector: 'app-light-off',
  templateUrl: './light-off.component.html',
  styleUrls: ['./light-off.component.scss'],
})
export class LightOffComponent implements OnInit {
  constructor() {}

  title = '';

  ngOnInit(): void {
    appTitle.subscribe((title) => {
      this.title = title;
    });
  }
}
