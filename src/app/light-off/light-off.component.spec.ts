import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightOffComponent } from './light-off.component';

describe('LightOffComponent', () => {
  let component: LightOffComponent;
  let fixture: ComponentFixture<LightOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
