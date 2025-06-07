import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {

  @Input() dismiss: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
