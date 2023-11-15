import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);
@Component({
  selector: 'app-creative-app',
  templateUrl: './creative-app.component.html',
  styleUrls: ['./creative-app.component.css'],
})
export class CreativeAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slides = [
    { url: '../../../assets/i/showcase-1.png' },
    { url: '../../../assets/i/showcase-2.png' },
    { url: '../../../assets/i/showcase-3.png' },
    { url: '../../../assets/i/showcase-4.png' },
    { url: '../../../assets/i/showcase-1.png' },
    { url: '../../../assets/i/showcase-2.png' },
    { url: '../../../assets/i/showcase-3.png' },
    { url: '../../../assets/i/showcase-4.png' },
  ];

  config: SwiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 25,
    pagination: { clickable: true },
    autoplay: true,
  };

  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
