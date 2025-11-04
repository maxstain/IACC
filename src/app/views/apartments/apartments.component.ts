import { Component } from '@angular/core';
import { apartments } from 'src/app/backend/data';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';
import { ApartmentService } from 'src/app/services/apartmentServices/apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  apartments: ApartmentModule[] = [];
  userRole: string = localStorage.getItem('role') || '';
  apartmentServices: ApartmentService = new ApartmentService();

  inputData: String = '';

  selectedLocation: string = '';
  locations: string[] = Array.from(
    new Set(apartments.map((apartment) => apartment.location))
  );

  search() {
    if (this.inputData === '' && this.selectedLocation === '') {
      this.apartments = apartments;
      return;
    }
    this.apartments = apartments.filter((apartment) => {
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
    this.apartments = apartments;
  }

  constructor() {
    this.apartmentServices
      .getApartments()
      .pipe()
      .subscribe((data) => {
        this.apartments = data;
      });
  }
}
