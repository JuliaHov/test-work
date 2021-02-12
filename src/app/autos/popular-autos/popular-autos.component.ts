import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-autos',
  templateUrl: './popular-autos.component.html',
  styleUrls: ['./popular-autos.component.scss']
})
export class PopularAutosComponent implements OnInit {
public Autos = [
  {
    img: 'assets/images/auto.jpg',
    logo: 'assets/images/logo.png',
    year: 2018,
    model: "Honda Civic Hatchback"
  },
  {
    img: 'assets/images/auto.jpg',
    logo: 'assets/images/logo.png',
    year: 2018,
    model: "Honda Civic Hatchback"
  },
  {
    img: 'assets/images/auto.jpg',
    logo: 'assets/images/logo.png',
    year: 2018,
    model: "Honda Civic Hatchback"
  },
  {
    img: 'assets/images/auto.jpg',
    logo: 'assets/images/logo.png',
    year: 2018,
    model: "Honda Civic Hatchback"
  },
  {
    img: 'assets/images/auto.jpg',
    logo: 'assets/images/logo.png',
    year: 2018,
    model: "Honda Civic Hatchback"
  },
  {
    img: 'assets/images/auto.jpg',
    logo: 'assets/images/logo.png',
    year: 2018,
    model: "Honda Civic Hatchback"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
