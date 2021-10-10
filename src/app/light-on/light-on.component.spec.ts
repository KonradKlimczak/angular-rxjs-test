import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightOnComponent } from './light-on.component';

describe('LightOnComponent', () => {
  let component: LightOnComponent;
  let fixture: ComponentFixture<LightOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
