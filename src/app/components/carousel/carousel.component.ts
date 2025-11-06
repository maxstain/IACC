import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: Apartment[] = [];

  currentIndex = 0;
  private autoPlayInterval: any;
  private readonly AUTO_PLAY_INTERVAL = 5000;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.AUTO_PLAY_INTERVAL);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  prev(): void {
    this.stopAutoPlay();
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.startAutoPlay();
  }

  next(): void {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.startAutoPlay();
  }

  select(index: number): void {
    this.stopAutoPlay();
    this.currentIndex = index;
    this.startAutoPlay();
  }

  isActive(index: number): boolean {
    return this.currentIndex === index;
  }

  get currentItem(): Apartment {
    return this.items[this.currentIndex];
  }

  getIndicators(): { index: number; active: boolean }[] {
    return this.items.map((_, index) => ({
      index,
      active: this.isActive(index),
    }));
  }
}
