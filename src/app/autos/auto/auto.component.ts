import { Component, Input, OnInit } from '@angular/core';
import { Auto } from '../models/auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  @Input() data: Auto;
  @Input() isLogo: false;
  @Input() isMark: false;
  @Input() isModel: false;
  @Input() isType: false;
  @Input() isYear: false;
  @Input() isKm: false;
  @Input() isPrice: false;
 
  constructor() { }

  ngOnInit(): void {
  }

}
