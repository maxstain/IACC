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

  search() {
    if (this.inputData === '') {
      this.apartments = apartments;
      return;
    }
    this.apartments = apartments.filter((apartment) =>
      apartment.name.toLowerCase().includes(this.inputData.toLowerCase())
    );
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
