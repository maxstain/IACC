import { Component } from '@angular/core';
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

  inputData: String = '';

  selectedLocation: string = '';
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
    if (this.inputData === '' && this.selectedLocation === '') {
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
        .includes(this.inputData.toString().toLowerCase());
      const matchesLocation = this.selectedLocation
        ? apartment.location === this.selectedLocation
        : true;
      return matchesTitle && matchesLocation;
    });
  }

  clear() {
    this.inputData = '';
    this.selectedLocation = '';
    this.apartmentService.getApartments().subscribe(
      {
        next: (data) => (this.apartments = data),
        error: () => { }, // already logged in service
        complete: () => (this.loading = false),
      }
    );
  }
}
