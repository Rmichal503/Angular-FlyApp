import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOriginComponent } from './weather-origin.component';

describe('WeatherOriginComponent', () => {
  let component: WeatherOriginComponent;
  let fixture: ComponentFixture<WeatherOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
