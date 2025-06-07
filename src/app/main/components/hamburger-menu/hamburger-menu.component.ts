import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HamburgerMenuComponent implements OnInit {

  @Input() open: boolean = false;

  @Output() isOpen: any = new EventEmitter();

  @Output() isClose: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  async toggleOpenStat(): Promise<void> {
    this.open = !this.open;
    if (this.open) {
      console.log('open');
      await this.isOpen.emit(true);
    } else {
      console.log('close');
      await this.isClose.emit(false);
    }
  }

  async closeAll(): Promise<void> {
    this.open = false;
    await this.isClose.emit(false);
  }

}
