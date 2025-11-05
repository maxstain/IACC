import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartmentServices/apartment.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  submitting = false;
  errorMsg = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    description: ['', [Validators.required, Validators.maxLength(1000)]],
    location: ['', [Validators.required, Validators.maxLength(200)]],
    price: [null as number | null, [Validators.required, Validators.min(0)]],
    imageUrl: [
      '',
      [
        Validators.required,
        Validators.pattern(/^https?:\/\/.+/i), // simple URL check
      ],
    ],
    features: this.fb.array<string>([], { validators: Validators.maxLength(20) }),
  });

  get featuresArray(): FormArray {
    return this.form.get('features') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private apartmentService: ApartmentService,
    private router: Router
  ) { }

  addFeatureChip(value: string) {
    const v = value?.trim();
    if (v) this.featuresArray.push(this.fb.control(v));
  }

  removeFeature(i: number) {
    this.featuresArray.removeAt(i);
  }

  submit() {
    this.errorMsg = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    // The service expects Omit<Apartment, 'id'>
    const payload = this.form.value as Omit<
      {
        id?: number;
        name: string;
        description: string;
        location: string;
        price: number;
        imageUrl: string;
        features: string[];
      },
      'id'
    >;

    this.apartmentService.addApartment(payload).subscribe({
      next: (created) => {
        // Navigate back or show success
        this.router.navigate(['/apartments', created.id]);
      },
      error: (err) => {
        this.errorMsg = 'Failed to add apartment. Please try again.';
        console.error(err);
        this.submitting = false;
      },
      complete: () => (this.submitting = false),
    });
  }

}
