import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SlidingTextBeltComponent} from './components/sliding-text-belt/sliding-text-belt.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {RandingHeaderComponent} from './components/randing-header/randing-header.component';
import Scrollbar from 'smooth-scrollbar';
import {ScrollStatus} from 'smooth-scrollbar/interfaces';
import * as $ from 'jquery';
import {
  SlidingBeltOutlineColorComponent
} from './components/sliding-belt-outline-color/sliding-belt-outline-color.component';
import {MobileRandingHeaderComponent} from './components/mobile-randing-header/mobile-randing-header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollContent') scrollContent: ElementRef | undefined;

  @ViewChild('randingHeader') randingHeader: RandingHeaderComponent | undefined;

  @ViewChild('mobileRandingHeader') mobileRandingHeader: MobileRandingHeaderComponent | undefined;

  @ViewChild('slidingTextBelt') slidingTextBelt: SlidingTextBeltComponent | undefined;

  @ViewChild('slidingBeltOutline') slidingBeltOutline: SlidingBeltOutlineColorComponent | undefined;

  /** @description Scroller */
  scroller: any;
  bodyScrollBar: Scrollbar | undefined;

  /** @description Scroller .section-08 accordion state */
  isMore1: boolean = false;
  isMore2: boolean = false;
  isMore3: boolean = true;

  /** @description section02 state */
  sec2OffsetDuration: number = 6;
  sec2ImageDuration: number = 10;

  /** @description section03 state */
  sec3DiaWidth: number = 100;
  sec3DiaHeight: number = 100;
  sec3CosmosWidth: number = 70;
  sec3CosmosHeight: number = 74;

  /** @description section04 state */
  sec4ImageWidth: number = 200;
  sec4ImageHeight: number = 200;

  constructor() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  ngOnInit(): void {
    this.scroller = document.querySelector('#randing-wrap');

    /** @description Smooth Scroll Initialize */
    this.bodyScrollBar = Scrollbar.init(this.scroller, {
      damping: 0.08,
      delegateTo: document,
      // continuousScrolling: true,
      renderByPixels: true,
    });

    this.bodyScrollBar.setPosition(0, 0);
    this.bodyScrollBar.track.xAxis.element.remove();
    let bodyScrollBar = this.bodyScrollBar;

    // Scroll Trigger Init
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

    /* floating btn  */
    const fixedElem: any = document.querySelector('.floating-btns');
    fixedElem.style.right = '0px';

    /* floating desktop header */
    const fixedHeader: any = document.querySelector('#randing-header-section');
    fixedHeader.style.top = '0px';

    /* floating mobile header */
    const fixedMobileHeader: any = document.querySelector('#randing-mobile-header-section');
    fixedMobileHeader.style.top = '0px';

    /* 최종 스크롤 offset */
    let lastScrollTop = 0;

    /* Scroll Event */
    bodyScrollBar.addListener((scrollStatus: ScrollStatus) => {

      /*  fixed floating top Desktop Header */
      fixedHeader.style.top = scrollStatus.offset.y + 'px';

      /*  fixed floating top Mobile Header */
      fixedMobileHeader.style.top = scrollStatus.offset.y + 'px';

      /* fixed floating btn */
      fixedElem.style.top = scrollStatus.offset.y + 'px';

      /* 상단 Scroll Banner */
      if (this.slidingTextBelt) {
        this.slidingTextBelt.scrollHandler(5);
      }

      /* GSAP Marker Position */
      if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
        gsap.set(markers, {marginTop: -scrollStatus.offset.y});
      }

      ScrollTrigger.update();

    });

    /** true => mobile, false => desktop */
    if (this.scroller.offsetWidth < 1024) {
      /** section 2 */
      this.sec2ImageDuration = 1;
      this.sec2OffsetDuration = 6;
      /** section 3 */
      this.sec3DiaWidth = 50;
      this.sec3DiaHeight = 50;
      this.sec3CosmosWidth = 35;
      this.sec3CosmosHeight = 36;
      /** section 4 */
      this.sec4ImageWidth = 100;
      this.sec4ImageHeight = 75;
    } else {
      /** section 2 */
      this.sec2ImageDuration = 6;
      this.sec2OffsetDuration = 10;
      /** section 3 */
      this.sec3DiaWidth = 100;
      this.sec3DiaHeight = 100;
      this.sec3CosmosWidth = 70;
      this.sec3CosmosHeight = 74;
      /** section 4 */
      this.sec4ImageWidth = 280;
      this.sec4ImageHeight = 200;
    }

    // @ts-ignore
    let timer = undefined;
    window.addEventListener('resize', () => {
      // @ts-ignore
      clearTimeout(timer);

      timer = setTimeout(() => {
        location.reload();
      }, 200);
    });
  }

  ngAfterViewInit(): void {
    /* 에니메이션 세팅 */
    this.animationInit();
  }

  /** Animation Setting */
  animationInit(): void {

    /* 메인 동영상 */
    this.videoPlayerInit();

    /* 섹션1 애니메이션 */
    this.animateSec1Init();

    /* 섹션2 애니메이션 */
    this.animateSec2Init();

    /* 섹션3 애니메이션 */
    this.animateSec3Init();

    /* 섹션4 애니메이션 */
    this.animateSec4Init();

    /* 섹션5 애니메이션 */
    this.animateSec5Init();

    /* 섹션6 애니메이션 */
    this.animateSec6Init();

    /* 섹션 6-5 애니메이션*/
    this.animateSec6_5Init();

    /* 섹션7 애니메이션 */
    this.animateSec7Init();

    /* 섹션8 애니메이션 */
    this.animateSec8Init();

    /* 섹션9 애니메이션 */
    this.animateSec9Init();

    /* 섹션10 애니메이션 */
    this.animateSec10Init();

    /* 섹션11 애니메이션 */
    this.animateSec11Init();

  }

  videoPlayerInit(): void {
    let videoEl = <HTMLMediaElement>document.querySelector('#play-video-sample');

    if (videoEl) {
      videoEl.loop = true;
      videoEl.muted = true;
      videoEl.controls = false;
      videoEl.autoplay = true;
    }

    let mobileVideoEl = <HTMLMediaElement>document.querySelector('#mobile-main-video');

    if (mobileVideoEl) {
      mobileVideoEl.loop = true;
      mobileVideoEl.muted = true;
      mobileVideoEl.controls = false;
      mobileVideoEl.autoplay = true;
    }
  }

  navigationClick(sectionName: any): void {

    if (sectionName === 'waiting') {
      alert('준비중입니다.');
      return;
    }

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
            magnification = 3.5;
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
          gsap.to('#randing-content', 0.5, {
            opacity: 0,
          });
        }

        setTimeout( () => {
          if (this.mobileRandingHeader) {
            this.mobileRandingHeader.burgerOpenStatus(true);
          }
        }, 300);

        setTimeout(() => {
          // @ts-ignore
          bodyScrollBar.scrollIntoView(document.querySelector(`#${sectionName}`), {
            // alignToTop: true,
            offsetTop: -result,
            onlyScrollIfNeeded: true,
          });

          gsap.to('#randing-content', 0.5, {
            opacity: 1,
          })

        }, 0);
      }
    }
  }

  animateSec1Init(): void {
    const section01: any = document.querySelector('#section-01');
    if (section01) {}
  }

  animateSec2Init(): void {
    const section02: any = document.querySelector('#section-02');
    if (section02) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section02,
          start: 'top top',
          end: () => '+=' + (section02.offsetHeight * this.sec2OffsetDuration),
          scrub: true,
          // markers: true,
          pin: true,
          pinType: 'transform',
          scroller: this.scroller
        }
      });

      sectionTimeline
        .from(
          `#section-02 .text-wrap div`,
          {
            duration: 2,
            y: 100,
            opacity: 0,
            stagger: {
              each: 0.7,
            },
          },
        );

      sectionTimeline
        .fromTo(
          `#section-02 .background-inner-wrap > img`,
          {
            y: '300vh',
            duration: this.sec2ImageDuration,
            opacity: 0.7,
            ease: 'linear',
          }, {
            y: '-150vh',
            duration: this.sec2ImageDuration,
            opacity: 1,
            ease: 'linear',
            stagger: {
              each: 0.6,
            },
          }, '-=2'
        );

      sectionTimeline
        .to(
          `#section-02 .text-wrap`,
          {
            duration: 3,
            y: '-50vh',
            opacity: 0,
            ease: 'linear',
          },
        );
    }
  }

  animateSec3Init(): void {
    const section03: any = document.querySelector('#section-03');
    if (section03) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section03,
          start: 'top top',
          end: () => '+=' + (section03.offsetHeight * 7),
          scrub: true,
          // markers: true,
          pin: true,
          pinType: 'transform',
          scroller: this.scroller
        }
      });

      sectionTimeline.to(
        section03,
        {
          duration: 1.5,
          backgroundColor: '#fff',
          opacity: 1
        }
      );

      sectionTimeline.fromTo(
        '#section-03 .text-wrap-right',
        {
          duration: 10,
          x: '120%',
          ease: 'linear',
        },
        {
          duration: 10,
          x: '-120%',
          ease: 'linear',
        }
      );

      sectionTimeline.fromTo(
        '#section-03 .text-wrap-left',
        {
          duration: 10,
          x: '-120%',
          ease: 'linear',
        },
        {
          duration: 10,
          x: '120%',
          ease: 'linear',
        }, '-=10'
      );

      sectionTimeline.to(
        section03,
        {
          duration: 2,
          backgroundColor: '#000',
          opacity: 0,
          ease: 'linear',
        },
        '-=2'
      );
    }
  }

  animateSec4Init(): void {
    const section04: any = document.querySelector('#section-04');
    // /*
    if (section04) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section04,
          start: `top center`,
          end: () => '+=' + (section04.offsetHeight * 2),
          scrub: true,
          // markers: true,
          pin: true,
          pinType: 'transform',
          scroller: this.scroller
        }
      });

      sectionTimeline.from(
        '#section-04 .text-wrap .text-content .text-line',
        {
          duration: 8,
          ease: 'linear',
          y: '300px',
          opacity: 0,
          stagger: {
            each: 3,
          },
        },
      )

      sectionTimeline.to(
        '#section-04 .text-wrap .text-content .text-line',
        {
          duration: 8,
          y: '-50vh',
          ease: 'linear',
        },
      );

      sectionTimeline.fromTo(
        '#section-04 .image-wrap img',
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
    // */
  }

  animateSec5Init(): void {
  }

  animateSec6Init(): void {
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

  animateSec6_5Init(): void {
    const textSliderWrapper: any = document.querySelector('#section-06_5 .title-banner-bar #title-banner-content');

    if (textSliderWrapper) {
      gsap.from('#title-banner-content', 80, {
        x: -(textSliderWrapper.offsetWidth - this.scroller.offsetWidth),
        ease: 'linear',
        repeat: -1
      });
    }
  }

  animateSec7Init(): void {
    const section07: any = document.querySelector('#section-07');

    if (section07) {
      let sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section07,
          start: 'top top',
          end: () => '+=' + (section07.offsetHeight * 5),
          scrub: true,
          // markers: true,
          pin: true,
          pinType: 'transform',
          scroller: this.scroller
        }
      });

      const sectionContent: any = document.querySelector('#section-07 .third-text-wrap');

      if (sectionContent) {
        sectionTimeline.to(
          '#section-07 .third-text-wrap .artist-images',
          {
            duration: 7,
            ease: 'linear',
            x: -(sectionContent.offsetWidth - this.scroller.offsetWidth),
          },
        );

        sectionTimeline.to(
          `#section-07`,
          {
            duration: 2,
            opacity: 0,
          }, `+=1`,
        );
      }

    }

  }

  animateSec8Init(): void {
    const section08: any = document.querySelector('#section-08');

    if (section08) {}
  }

  animateSec9Init(): void {
    const section09: any = document.querySelector('#section-09');
    if (section09) {
      const textSliderWrapper: any =
        document.querySelector('#section-09 .sliding-banner-wrap #sliding-banner-bar');

      if (textSliderWrapper) {
        gsap.from('#sliding-banner-bar', 50, {
          x: -(textSliderWrapper.offsetWidth - this.scroller.offsetWidth),
          ease: 'linear',
          repeat: -1,
        });
      }

    }
  }

  animateSec10Init(): void {
    const section10: any = document.querySelector('#section-10');
    if (section10) {}

    let videoEl = <HTMLMediaElement>document.querySelector('#statue-video');

    if (videoEl) {
      videoEl.loop = true;
      videoEl.muted = true;
      videoEl.controls = false;
      videoEl.autoplay = true;
      videoEl.playbackRate = 0.4;
    }

  }

  animateSec11Init(): void {
  }

  async debug(data?: any): Promise<void> {
    gsap.to(this.scroller, {
      scrollTo: 0,
      ease: 'power4',
    });
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

  changeLandingStatus(): void {
    if (this.randingHeader) {}
  }

  moveExternalUrl(link: string): void {
    window.open(link);
  }
}
