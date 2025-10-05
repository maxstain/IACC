import { Component } from '@angular/core';
import { apartments } from 'src/app/backend/data';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  apartments: ApartmentModule[] = [];

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
    this.apartments = apartments;
  }
}
