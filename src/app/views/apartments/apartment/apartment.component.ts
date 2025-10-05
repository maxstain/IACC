import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { apartments } from 'src/app/backend/data';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})
export class ApartmentComponent {
  apartment!: ApartmentModule;

  constructor(router: Router) {
    apartments.map((apt: ApartmentModule) => {
      if (apt.id.toString() === router.url.split('/')[2]) {
        this.apartment = apt;
      }
    });
  }
}
