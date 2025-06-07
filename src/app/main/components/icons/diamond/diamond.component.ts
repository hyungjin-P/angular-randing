import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'icon-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DiamondComponent implements OnInit {

  @Input() width: number = 100;
  @Input() height: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
