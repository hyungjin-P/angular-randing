import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-mobile-randing-header',
  templateUrl: './mobile-randing-header.component.html',
  styleUrls: ['./mobile-randing-header.component.scss']
})
export class MobileRandingHeaderComponent implements OnInit {

  @ViewChild('burgerMenu') burgerMenu: HamburgerMenuComponent | undefined;

  @Output() clickNavigation: any = new EventEmitter();

  burgerOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  burgerOpenStatus(status: boolean): void {
    this.burgerOpen = status;
  }

  async clickNavigationEvent(sectionName: string): Promise<void> {

    this.clickNavigation.emit(sectionName);

    setTimeout(() => {
      this.burgerOpen = false;
      this.burgerMenu?.closeAll();
    }, 100);

  }

  waitingMessage(message: string): void {
    alert(message);
  }

  moveExternalUrl(url: string): void {
    window.location.href = url;
  }

}
