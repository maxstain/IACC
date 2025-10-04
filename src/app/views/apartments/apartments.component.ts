import { Component } from '@angular/core';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  apartments: ApartmentModule[] = [];

  constructor() {
    this.apartments = [
      {
        id: 1,
        name: 'Apartment 1',
        location: 'Location 1',
        price: 1000,
        imageUrl:
          'https://cdn.carmel-apartments.com/system/uploads/fae/image/asset/18810/three-bedroom-apartmnet-union-market-noho-washington-dc-luxury.jpeg',
      },
      {
        id: 2,
        name: 'Apartment 2',
        location: 'Location 2',
        price: 1200,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYkx4vCo8pSJk3POFq28Il8pD9ANqYjiIsA&s',
      },
      {
        id: 3,
        name: 'Apartment 3',
        location: 'Location 3',
        price: 900,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqxnJd_8bCCsmv8cXZpjF18M7jRxAd31TEQ&s',
      },
    ];
  }
}
