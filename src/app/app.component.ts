import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { appTitle } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  ngOnInit() {}
}
