import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import gsap from 'gsap';
import * as $ from 'jquery';


@Component({
  selector: 'app-sliding-belt-outline-color',
  templateUrl: './sliding-belt-outline-color.component.html',
  styleUrls: ['./sliding-belt-outline-color.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidingBeltOutlineColorComponent implements OnInit, AfterViewInit {

  yellow = '#ffff00';
  blue = '#0123ff';
  green = '#00FF47';
  pink = '#F723FB';

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let $text1 = $('#text-parallel-1 .rolling-text__text');
      let $wrap1 = $('#text-parallel-1.rolling-text');

      let $text2 = $('#text-parallel-2 .rolling-text__text');
      let $wrap2 = $('#text-parallel-2.rolling-text');

      let $text3 = $('#text-parallel-3 .rolling-text__text');
      let $wrap3 = $('#text-parallel-3.rolling-text');


      if ($text1) {
        $text1.clone().appendTo($wrap1);

        const width = $text1.width();

        if (width) {
          gsap.to($wrap1, 40, {
            x: -width,
            ease: 'linear',
            repeat: -1
          });
        }
      }

      if ($text2) {
        $text2.clone().appendTo($wrap2);

        const width = $text2.width();

        if (width) {
          gsap.from($wrap2, 50, {
            x: -width,
            ease: 'linear',
            repeat: -1
          });
        }
      }

      if ($text3) {
        $text3.clone().appendTo($wrap3);

        const width = $text3.width();

        if (width) {
          gsap.to($wrap3, 25, {
            x: -width,
            ease: 'linear',
            repeat: -1
          });
        }
      }

    }, 0);
  }

}
