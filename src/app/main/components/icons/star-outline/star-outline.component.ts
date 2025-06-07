import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'icon-star-outline',
  templateUrl: './star-outline.component.html',
  styleUrls: ['./star-outline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarOutlineComponent implements OnInit {

  @Input() pathFill: string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
