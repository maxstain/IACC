import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartmentServices/apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  apartments: Apartment[] = [];
  userRole: string = localStorage.getItem('role') || '';

  formGroup = new FormGroup({
    inputData: new FormControl(''),
    selectedLocation: new FormControl('')
  });

  locations: string[] = [];
  loading: boolean = false;

  constructor(private apartmentService: ApartmentService) {
  }


  ngOnInit(): void {
    this.loading = true;
    this.apartmentService.getApartments().subscribe({
      next: (data) => {
        this.apartments = data;
        this.locations = Array.from(
          new Set(this.apartments.map((apartment) => apartment.location))
        );
      },
      error: () => { }, // already logged in service
      complete: () => (this.loading = false),
    });
  }


  search() {
    console.log(this.formGroup.value.inputData)
    if (this.formGroup.value.inputData === '' && this.formGroup.value.selectedLocation === '') {
      this.apartmentService.getApartments().subscribe(
        {
          next: (data) => (this.apartments = data),
          error: () => { }, // already logged in service
          complete: () => (this.loading = false),
        }
      )
      return;
    }
    this.apartments = this.apartments.filter((apartment) => {
      const matchesTitle = apartment.name
        .toLowerCase()
        .includes(this.formGroup.value.inputData!.toLowerCase());
      const matchesLocation = this.formGroup.value.selectedLocation
        ? apartment.location === this.formGroup.value.selectedLocation
        : true;
      return matchesTitle && matchesLocation;
    });
  }

  clear() {
    this.formGroup.setValue({ inputData: '', selectedLocation: '' });
    this.apartmentService.getApartments().subscribe(
      {
        next: (data) => (this.apartments = data),
        error: () => { }, // already logged in service
        complete: () => (this.loading = false),
      }
    );
  }
}
