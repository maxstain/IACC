import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartmentServices/apartment.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  private FormData: FormData = new FormData();
  private apartmentService: ApartmentService = new ApartmentService();

  constructor(router: Router) {
    this.FormData.append('userId', router.getCurrentNavigation()?.extras.state?.['userId'] || '');
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.FormData.append('images', files[i], files[i].name);
      }
    }
  }

  onSubmit(formValues: any): void {
    this.FormData.append('title', formValues.title);
    this.FormData.append('description', formValues.description);
    this.FormData.append('location', formValues.location);
    this.FormData.append('price', formValues.price);
    try {
      this.apartmentService.addApartment(this.FormData);
    } catch (error) {
      console.error('Error submitting apartment data:', error);
    }
  }
}
