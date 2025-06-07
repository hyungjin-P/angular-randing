import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-randing-header',
  templateUrl: './randing-header.component.html',
  styleUrls: ['./randing-header.component.scss']
})
export class RandingHeaderComponent implements OnInit, AfterViewInit {

  @Input() container: any = {};

  @Input() open: boolean = false;

  @Output() clickNavigation: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }

  clickNavigationEvent(sectionName: string): void {
    this.clickNavigation.emit(sectionName);
  }

  waitingMessage(message: string): void {
    alert(message);
  }

  moveExternalUrl(url: string): void {
    window.open(url);
  }


}
