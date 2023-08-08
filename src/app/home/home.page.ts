import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
images = [
  '../assets/david-svihovec-Gd6hKygUGi8-unsplash.jpg',
  '../assets/rami-al-zayat-w33-zg-dNL4-unsplash.jpg',
  '../assets/robin-worrall-FPt10LXK0cg-unsplash.jpg',
  '../assets/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg',
];  
  constructor() {}

}
