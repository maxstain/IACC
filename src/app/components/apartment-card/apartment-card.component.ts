import { Component, Input } from '@angular/core';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css'],
})
export class ApartmentCardComponent {
  @Input() apartment!: ApartmentModule;
}
