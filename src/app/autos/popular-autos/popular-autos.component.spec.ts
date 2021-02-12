import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAutosComponent } from './popular-autos.component';

describe('PopularAutosComponent', () => {
  let component: PopularAutosComponent;
  let fixture: ComponentFixture<PopularAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
