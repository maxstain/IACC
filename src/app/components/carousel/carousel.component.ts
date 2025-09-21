import { Component, OnInit, OnDestroy } from '@angular/core';

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  items: CarouselItem[] = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slide 1',
      title: 'Slide 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slide 2',
      title: 'Slide 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1692912364084-97b9ae31a8e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slide 3',
      title: 'Slide 3',
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
