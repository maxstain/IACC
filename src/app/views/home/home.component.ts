import { Component } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartmentServices/apartment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  apartments: Apartment[] = [];

  constructor(private aptService: ApartmentService) {
    this.aptService.getApartments().subscribe((data) => {
      this.apartments = data.filter(apt => apt.featured);
    });
  }
}
