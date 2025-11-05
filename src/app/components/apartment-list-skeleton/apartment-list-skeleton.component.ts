import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apartment-list-skeleton',
  templateUrl: './apartment-list-skeleton.component.html',
  styleUrls: ['./apartment-list-skeleton.component.css']
})
export class ApartmentListSkeletonComponent {
  @Input() itemCount: number = 3;
  items: number[] = [];

  ngOnInit() {
    this.items = Array(this.itemCount);
  }
}
