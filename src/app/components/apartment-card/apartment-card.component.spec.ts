import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentCardComponent } from './apartment-card.component';

describe('ApartmentCardComponent', () => {
  let component: ApartmentCardComponent;
  let fixture: ComponentFixture<ApartmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentCardComponent]
    });
    fixture = TestBed.createComponent(ApartmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
