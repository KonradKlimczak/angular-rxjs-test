import { Component, OnInit } from '@angular/core';
import { appTitle } from '../state';

@Component({
  selector: 'app-light-on',
  templateUrl: './light-on.component.html',
  styleUrls: ['./light-on.component.scss'],
})
export class LightOnComponent implements OnInit {
  constructor() {}

  title = '';

  ngOnInit(): void {
    appTitle.subscribe((title) => {
      this.title = title;
    });
  }
}
