import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ApartmentModule {
  id!: number;
  name!: string;
  description!: string;
  location!: string;
  price!: number;
  imageUrl!: string;
  features: string[] = [];

  constructor() {}
}
