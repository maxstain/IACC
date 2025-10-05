import { Component, OnInit, OnDestroy } from '@angular/core';

interface CarouselItem {
  id: number;
  name: String;
  location: String;
  price: number;
  imageUrl: String;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  items: CarouselItem[] = [
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

  get currentItem(): CarouselItem {
    return this.items[this.currentIndex];
  }

  getIndicators(): { index: number; active: boolean }[] {
    return this.items.map((_, index) => ({
      index,
      active: this.isActive(index),
    }));
  }
}
