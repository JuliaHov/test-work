import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-type',
  templateUrl: './auto-type.component.html',
  styleUrls: ['./auto-type.component.scss']
})
export class AutoTypeComponent implements OnInit {
  public Types = [
    {
      img: 'assets/images/auto.jpg',
      type: 'Sedan'
    },
    {
      img: 'assets/images/auto.jpg',
      type: 'Sedan'
    },
    {
      img: 'assets/images/auto.jpg',
      type: 'Sedan'
    },
    {
      img: 'assets/images/auto.jpg',
      type: 'Sedan'
    },
    {
      img: 'assets/images/auto.jpg',
      type: 'Sedan'
    },
    {
      img: 'assets/images/auto.jpg',
      type: 'Sedan'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
