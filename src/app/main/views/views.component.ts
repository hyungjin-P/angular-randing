import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  constructor(
    router: Router,
  ) {
    console.log('views component');

    const detectMobileDevice = (agent: any) => {
      const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
      ];

      return mobileRegex.some(mobile => agent.match(mobile))
    };

    const isMobile = detectMobileDevice(window.navigator.userAgent);

    if (isMobile) {
      router.navigateByUrl('/m').then();
    } else {
      router.navigateByUrl('/main').then();
    }

  }

  ngOnInit(): void {
  }



}
