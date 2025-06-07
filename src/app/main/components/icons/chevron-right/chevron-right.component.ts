import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'icon-chevron-right',
  templateUrl: './chevron-right.component.html',
  styleUrls: ['./chevron-right.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChevronRightComponent implements OnInit {

  @Input() width: number | undefined;
  @Input() height: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
