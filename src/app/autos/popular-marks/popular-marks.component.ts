import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-marks',
  templateUrl: './popular-marks.component.html',
  styleUrls: ['./popular-marks.component.scss']
})
export class PopularMarksComponent implements OnInit {
public Marks = [
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
  {
    img: 'assets/images/logo.png',
    mark: 'Toyota'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
