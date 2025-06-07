import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'icon-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CosmosComponent implements OnInit {

  @Input() width: number = 70;
  @Input() height: number = 74;

  constructor() { }

  ngOnInit(): void {
  }

}
