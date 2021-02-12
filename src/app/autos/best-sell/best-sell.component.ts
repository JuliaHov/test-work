import { Component, OnInit } from '@angular/core';

export enum BestSellerModel {
  mostSelling = 'mostSelling',
  bestselling = 'bestSelling',
  mostVisited = 'mostVisited'
}
@Component({
  selector: 'app-best-sell',
  templateUrl: './best-sell.component.html',
  styleUrls: ['./best-sell.component.scss']
})
export class BestSellComponent implements OnInit {
  public selectedTab = BestSellerModel.bestselling;
  public bestSellerModel = BestSellerModel;

  public BestSelling = [
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2021,
      model: "Honda Civic Hatchback"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2021,
      model: "Honda Civic Hatchback"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2021,
      model: "Honda Civic Hatchback"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2021,
      model: "Honda Civic Hatchback"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2021,
      model: "Honda Civic Hatchback"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2021,
      model: "Honda Civic Hatchback"
    },
  ];

  public MostSelling = [
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2020,
      model: "Taoyta Prius AWD"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2020,
      model: "Taoyta Prius AWD"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2020,
      model: "Taoyta Prius AWD"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2020,
      model: "Taoyta Prius AWD"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2020,
      model: "Taoyta Prius AWD"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2020,
      model: "Taoyta Prius AWD"
    },
  ];

  public MostVisited = [
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2019,
      model: "BMW series 5"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2018,
      model: "BMW series 5"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2018,
      model: "BMW series 5"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2019,
      model: "BMW series 5"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2018,
      model: "BMW series 5"
    },
    {
      img: 'assets/images/auto.jpg',
      logo: 'assets/images/logo.png',
      year: 2018,
      model: "BMW series 5"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
