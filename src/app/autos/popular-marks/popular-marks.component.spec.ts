import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMarksComponent } from './popular-marks.component';

describe('PopularMarksComponent', () => {
  let component: PopularMarksComponent;
  let fixture: ComponentFixture<PopularMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
