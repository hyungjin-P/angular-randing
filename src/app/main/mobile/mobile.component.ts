import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {MobileRandingHeaderComponent} from '../components/mobile-randing-header/mobile-randing-header.component';
import {SlidingTextBeltComponent} from '../components/sliding-text-belt/sliding-text-belt.component';
import {
  SlidingBeltOutlineColorComponent
} from '../components/sliding-belt-outline-color/sliding-belt-outline-color.component';
import Scrollbar from 'smooth-scrollbar';
import * as $ from 'jquery';
import {ScrollStatus} from 'smooth-scrollbar/interfaces';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollContent') scrollContent: ElementRef | undefined;

  @ViewChild('mobileRandingHeader') mobileRandingHeader: MobileRandingHeaderComponent | undefined;

  @ViewChild('slidingTextBelt') slidingTextBelt: SlidingTextBeltComponent | undefined;

  @ViewChild('slidingBeltOutline') slidingBeltOutline: SlidingBeltOutlineColorComponent | undefined;

  scroller: any;

  /** @description section04 state */
  sec4ImageWidth: number = 200;
  sec4ImageHeight: number = 200;

  /** @description Accordion state */
  isMore1: boolean = false;
  isMore2: boolean = false;
  isMore3: boolean = true;

  bodyScrollBar: Scrollbar | undefined;

  constructor() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  /** mobile 은 smooth-scroller 제거 */
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scroller = document.querySelector('#randing-wrap-m');

    this.bodyScrollBar = Scrollbar.init(this.scroller, {
      damping: 0.09,
      delegateTo: document,
      renderByPixels: false,
    });

    this.bodyScrollBar.setPosition(0, 0);
    this.bodyScrollBar.track.xAxis.element.remove();

    const bodyScrollBar = this.bodyScrollBar;

    // Scroll Trigger Scroll revision
    ScrollTrigger.scrollerProxy(this.scroller, {
      scrollTop(value: any) {
        if (arguments.length) {
          if (bodyScrollBar) {
            bodyScrollBar.scrollTop = value;
          }
        }
        return bodyScrollBar ? bodyScrollBar.scrollTop : 0;
      }
    });

    ScrollTrigger.defaults({scroller: this.scroller});

    /* Gsap Maker Refresh */
    if (document.querySelector('.gsap-marker-scroller-start')) {
      const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
      bodyScrollBar.addListener(({offset}) => gsap.set(markers, {marginTop: -offset.y}));
    }

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    this.animationInit();

    /* floating mobile header */
    const fixedMobileHeader: any = document.querySelector('#randing-mobile-header-section');
    fixedMobileHeader.style.top = '0px';


    bodyScrollBar.addListener((scrollStatus: ScrollStatus) => {
      ScrollTrigger.update();

      fixedMobileHeader.style.top = scrollStatus.offset.y + 'px';
    });
  }

  /** Animation Setting */
  animationInit(): void {

    this.animationSec2Init();

    this.animationSec3Init();

    this.animationSec4Init();

    this.animationSec5Init();

    this.animationSec6Init();

    this.animationSec7Init();
  }

  animationSec2Init(): void {
    const section02: any = document.querySelector('#section-02-m');

    if (section02) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section02,
          start: 'top top',
          end: () => '+=' + (section02.offsetHeight * 4),
          scrub: true,
          // markers: true,
          pin: '#section-02-m',
          pinType: 'transform',
          anticipatePin: 1,
        }
      });

      sectionTimeline
        .from(
          `#section-02-m .text-wrap`,
          {
            duration: 2,
            y: 100,
            opacity: 0,
          });

      sectionTimeline
        .to(
          `#section-02-m .text-wrap`,
          {
            duration: 3,
            y: '-50vh',
            opacity: 0,
            ease: 'linear',
          },
        );
    }
  }

  animationSec3Init(): void {
    const section03: any = document.querySelector('#section-03-m');
    if (section03) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section03,
          start: 'top top',
          end: () => '+=' + (section03.offsetHeight * 3.5),
          scrub: true,
          pin: true,
          pinType: 'transform',
          anticipatePin: 1,
        }
      });

      sectionTimeline.to(
        section03,
        {
          duration: 2,
          backgroundColor: '#fff',
          opacity: 1,
        }
      );

      sectionTimeline.fromTo(
        '#section-03-m .text-wrap-right',
        {
          duration: 8,
          x: '120%',
          ease: 'linear',
        },
        {
          duration: 8,
          x: '-120%',
          ease: 'linear',
        }, '-=2'
      );

      sectionTimeline.fromTo(
        '#section-03-m .text-wrap-left',
        {
          duration: 8,
          x: '-120%',
          ease: 'linear',
        },
        {
          duration: 8,
          x: '120%',
          ease: 'linear',
        }, '-=8'
      );

      sectionTimeline.to(
        section03,
        {
          duration: 2,
          backgroundColor: '#000',
          opacity: 0,
          ease: 'linear',
        }, '-=2');
    }
  }

  animationSec4Init(): void {
    const section04: any = document.querySelector('#section-04-m');

    if (section04) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section04,
          start: `top center`,
          end: () => '+=' + (section04.offsetHeight * 2),
          scrub: true,
          pin: true,
          pinType: 'transform',
          scroller: this.scroller
        }
      });

      sectionTimeline.from(
        '#section-04-m .text-wrap .text-content .text-line',
        {
          duration: 8,
          ease: 'linear',
          y: '300px',
          opacity: 0,
        },
      );

      sectionTimeline.to(
        '#section-04-m .text-wrap .text-content .text-line',
        {
          duration: 8,
          y: '-50vh',
          ease: 'linear',
        },
      );

      sectionTimeline.fromTo(
        '#section-04-m .image-wrap img',
        {
          duration: 0.5,
          width: `${this.sec4ImageWidth}px`,
          height: `${this.sec4ImageHeight}px`,
          ease: 'linear',
        },
        {
          duration: 10,
          y: '-40vh',
          width: '100%',
          height: '100%',
          ease: 'linear',
        }, `-=9`
      );
    }
  }

  animationSec5Init(): void {
  }

  animationSec6Init(): void {
    const section06: any = document.querySelector('#section-06');

    if (section06) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section06,
          start: 'top top',
          end: () => '+=' + (section06.offsetHeight * 3.2),
          scrub: true,
          // markers: true,
          pin: true,
          pinType: 'transform',
          scroller: this.scroller
        }
      });

      const sectionContent: any = document.querySelector('#section-06 .section-wrap');

      if (sectionContent) {

        sectionTimeline.fromTo(
          '#section-06',
          {
            duration: 1,
            ease: 'linear',
            backgroundColor: '#000',
          },
          {
            duration: 5,
            ease: 'linear',
            backgroundColor: '#fff',
          },
        );

        sectionTimeline.to(
          '#section-06 .section-wrap',
          {
            duration: 10,
            ease: 'linear',
            x: -(sectionContent.offsetWidth - this.scroller.offsetWidth),
          },
          '-=6'
        );
      }
    }
  }

  animationSec7Init(): void {
    const section07: any = document.querySelector('#section-07-m');

    if (section07) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section07,
          start: 'top top',
          end: () => '+=' + (section07.offsetHeight * 0.25),
          scrub: true,
          scroller: this.scroller
        }
      });
    }
  }

  toggleMore(target?: string): void {
    switch (target) {
      case 'isMore1' :
        this.isMore1 = !this.isMore1;
        break;
      case 'isMore2' :
        this.isMore2 = !this.isMore2;
        break;
      case 'isMore3' :
        this.isMore3 = !this.isMore3;
        break;
    }
  }

  moveExternalUrl(link: string): void {
    window.open(link);
  }

  navigationClick(sectionName: any): void {

    if (this.bodyScrollBar) {

      const bodyScrollBar = this.bodyScrollBar;

      const tag = $('#' + sectionName);

      if (tag) {
        const wrapInnerOffset: number = bodyScrollBar.getSize().container.height;

        let magnification = 0;

        switch (sectionName) {
          case 'section-01':
            magnification = 0;
            break;
          case 'section-02':
            magnification = 2;
            break;
          case 'section-03':
            magnification = 3;
            break;
          case 'section-04':
            magnification = 0;
            break;
          case 'section-06':
            magnification = 0;
            break;
          case 'section-09':
            magnification = 0;
            break;
        }

        let result = wrapInnerOffset * magnification;

        if (sectionName !== 'section-01') {
          bodyScrollBar.scrollTo(0, 0, 0);
          gsap.to('#mobile-randing-content', 0.5, {
            opacity: 0,
          });
        }

        setTimeout(() => {
          if (this.mobileRandingHeader) {
            this.mobileRandingHeader.burgerOpenStatus(true);
          }
        }, 300);

        setTimeout(() => {
          // @ts-ignore
          bodyScrollBar.scrollIntoView(document.querySelector(`#${sectionName}-m`), {
            // alignToTop: true,
            offsetTop: -result,
            onlyScrollIfNeeded: true,
          });

          gsap.to('#mobile-randing-content', 0.5, {
            opacity: 1,
          })

        }, 0);
      }
    }
  }
}
