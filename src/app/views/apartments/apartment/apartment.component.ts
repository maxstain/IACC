import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartmentServices/apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})
export class ApartmentComponent {
  apartment!: Apartment;
  errorMsg: string = '';
  userRole: string = 'Admin';
  id!: string;
  deletingId: number | string | null = null;

  constructor(
    private router: Router,
    private apartmentService: ApartmentService
  ) {
    this.id = router.url.split('/')[2];

    this.apartmentService.getApartmentById(this.id).subscribe({
      next: apt => this.apartment = apt,
      error: err => this.errorMsg = 'Could not load apartment.'
    });
  }

  onClickDelete() {
    this.deletingId = this.apartment.id;
    this.apartmentService.deleteApartment(this.apartment.id).subscribe({
      next: () => {
        this.router.navigate(['/apartments']);
      },
      error: (err) => {
        this.errorMsg = 'Failed to delete apartment. Please try again.';
        console.error(err);
      },
      complete: () => {
        this.deletingId = null;
      }
    });
  }
}
