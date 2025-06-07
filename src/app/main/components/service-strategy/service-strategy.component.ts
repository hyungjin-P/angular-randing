import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {SwiperComponent} from 'swiper/angular';

class StrategyContent {
  title: string = '';
  content: string = '';
  imgSrc: string = '';
}

@Component({
  selector: 'app-service-strategy',
  templateUrl: './service-strategy.component.html',
  styleUrls: ['./service-strategy.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServiceStrategyComponent implements OnInit {

  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;

  @Input() contents: StrategyContent[] | undefined;

  swiperOptions: SwiperOptions = {
    navigation: false,
    mousewheel: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
  };

  constructor() {
  }

  ngOnInit(): void {

    if (!this.contents) {
      this.contents = [
        {
          title: 'BRAND',
          content: '작품보다 작가의 이야기를 담고자 합니다 작품에 따른 사상화 감정 그리고 ' +
            '철학 등을 소비자와 공유 하고 작품에 대한 이해를 보다 가치있게 전달하고자 합니다.',
          imgSrc: 'https://s3 이미지 링크'
        },
        {
          title: 'BENEFIT',
          content: '신진 아티스트들에게 기획, 브랜드, 생산, 배송, 판매 등의 비즈니스를 지원하여 수입창출을 돕고자 합니다.',
          imgSrc: 'https://s3 이미지 링크'
        },
        {
          title: 'METAVERSE',
          content: '국내 뿐만 아니라 해외 소비자들에게도 작가의 작품 가치를 전달할 수 있도록 가상전시회를 개최합니다.',
          imgSrc: 'https://s3 이미지 링크'
        },
      ];
    }
  }
}
