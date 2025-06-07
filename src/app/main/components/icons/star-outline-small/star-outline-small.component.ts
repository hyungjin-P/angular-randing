import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-star-outline-small',
  templateUrl: './star-outline-small.component.html',
  styleUrls: ['./star-outline-small.component.scss']
})
export class StarOutlineSmallComponent implements OnInit {

  @Input() pathFill: string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
