import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Swiper } from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperExampleComponent {
  @Input() images: any = [];
  @Input() isNavigation: boolean = false;
  @Input() isWidthFull: boolean = false;
  public swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 0,
  };

  public setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      if (this.images.length - 1 != swiper.activeIndex) {
        swiper.slideNext();
      } else {
        swiper.slideTo(0);
      }
    }, 3000);
  }
}
