import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyApiComponent } from './fly-api.component';

describe('FlyApiComponent', () => {
  let component: FlyApiComponent;
  let fixture: ComponentFixture<FlyApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
