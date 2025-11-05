import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentListSkeletonComponent } from './apartment-list-skeleton.component';

describe('ApartmentListSkeletonComponent', () => {
  let component: ApartmentListSkeletonComponent;
  let fixture: ComponentFixture<ApartmentListSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentListSkeletonComponent]
    });
    fixture = TestBed.createComponent(ApartmentListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
