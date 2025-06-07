import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-decorate',
  templateUrl: './star-decorate.component.html',
  styleUrls: ['./star-decorate.component.scss']
})
export class StarDecorateComponent implements OnInit {

  @Input() color: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
