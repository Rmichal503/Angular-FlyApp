import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoeingComponent } from './boeing.component';

describe('BoeingComponent', () => {
  let component: BoeingComponent;
  let fixture: ComponentFixture<BoeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
