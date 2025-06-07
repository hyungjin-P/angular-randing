import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SwiperComponent} from 'swiper/angular';

class ArtistImage {
  nickName: string = '';
  imgSrc: string = '';
}

@Component({
  selector: 'app-artist-slider',
  templateUrl: './artist-slider.component.html',
  styleUrls: ['./artist-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArtistSliderComponent implements OnInit {

  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;

  @Input() contents: ArtistImage[] | undefined;

  constructor() { }

  ngOnInit(): void {
    if (!this.contents) {
      this.contents = [
        {
          nickName: 'ARTIST.GN STUDIO',
          imgSrc: './assets/images/section_07/221201/01_GN_STUDIO_221201.webp',
        },
        {
          nickName: 'ARTIST.HWANG JAE WON',
          imgSrc: './assets/images/section_07/221201/02_Hwang_jae_won_221201.webp',
        },
        {
          nickName: 'ARTIST.SCHREIBEN',
          imgSrc: './assets/images/section_07/221201/03_SCHREIBEN_221201.webp',
        },
        {
          nickName: 'ARTIST.SJ',
          imgSrc: './assets/images/section_07/221201/04_SJ_221201.webp',
        },
        {
          nickName: 'ARTIST.SSIMPLY',
          imgSrc: './assets/images/section_07/221201/05_SSIMPLY_221201.webp',
        },
        {
          nickName: 'ARTIST.백마',
          imgSrc: './assets/images/section_07/221201/06_백마_221201.webp',
        },
        {
          nickName: 'ARTIST.쫄자카',
          imgSrc: './assets/images/section_07/221201/07_쫄자카_221201.webp',
        },
      ];
    }
  }

}
