import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apartments } from 'src/app/backend/data';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  getApartments():Observable<ApartmentModule[]> {
    return new Observable((observer) => {
      observer.next(apartments);
      observer.complete();
    });
  }

  getApartmentById(id: number) {
    return apartments.find((apartment) => apartment.id === id);
  }

  addApartment(apartment: any) {
    apartments.push(apartment);
  }

  deleteApartment(id: number) {
    const index = apartments.findIndex((apartment) => apartment.id === id);
    apartments.splice(index, 1);
  }

  updateApartment(updatedApartment: any) {
    const index = apartments.findIndex(
      (apartment) => apartment.id === updatedApartment.id
    );
    apartments[index] = updatedApartment;
  }

  constructor() {}
}
