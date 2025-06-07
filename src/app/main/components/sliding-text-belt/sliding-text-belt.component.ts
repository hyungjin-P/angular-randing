import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sliding-text-belt',
  templateUrl: './sliding-text-belt.component.html',
  styleUrls: ['./sliding-text-belt.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidingTextBeltComponent implements OnInit, AfterViewInit {

  pTag1: any;
  textArr1: any;
  count1: number = 0;
  @Input() repeat: number = 20;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pTag1 = document.querySelector('.first-parallel');

      const repeatText = '_AND CREATE NEW ONE%%' + '#CRACK IT!%%';
      let repeatResultText: string = '';

      if (this.repeat > 0) {
        repeatResultText = repeatText.repeat(this.repeat);
      }

      this.textArr1 = repeatResultText.split('%%');

      this.count1 = 0;

      if (this.pTag1 && this.textArr1) {
        this.initTexts(this.pTag1, this.textArr1);
        const animate = () => {
          this.count1++;
          this.count1 = this.marqueeText(this.count1, this.pTag1, -1);
          window.requestAnimationFrame(animate);
        }

        animate();
      }
    }, 100);

  }

  ngOnInit(): void {

  }

  initTexts(element: any, textArray: any[]) {
    textArray.push(...textArray);

    textArray.forEach((text, index) => {
      if (index % 2 === 1) {
        const innerTag =
          `<div style="margin-right: 31px;
              width: 160px;
              color: black;">
            ${text}
          </div>`;
        element.innerHTML += innerTag;
      } else {
        const innerTag =
          `
          <div style="margin-right: 31px;
              color: #ffff00;
              text-shadow: -1px -1px 0 var(--black01), 1px -1px 0 var(--black01), -1px 1px 0 var(--black01), 1px 1px 0 var(--black01);
              width: 340px;">
            ${text}
          </div>`;
        element.innerHTML += innerTag;
      }
    });
  }

  marqueeText(count: any, element: any, direction: any) {
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translate3d(0, 0, 0)`;
      count = 0;
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

    return count;
  }

  scrollHandler(speed?: number) {
    if (speed) {
      this.count1 += speed;
    } else {
      this.count1 += 5;
    }
  }
}
