import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TitleTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
