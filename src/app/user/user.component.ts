import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnChanges {
  @Input() name: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes.', changes);
  }
}
