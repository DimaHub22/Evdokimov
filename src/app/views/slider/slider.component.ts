import {Component, OnInit} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar,SwiperOptions} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  config: SwiperOptions = {

      autoHeight: true,
      direction: 'vertical',
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      spaceBetween: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
