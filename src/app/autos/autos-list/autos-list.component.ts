import { Component } from '@angular/core';

export interface FilterModel {
  country?: string;
  brand?: string;
  price?: number
}
@Component({
  selector: 'app-autos-list',
  templateUrl: './autos-list.component.html',
  styleUrls: ['./autos-list.component.scss']
})
export class AutosListComponent {
  public _filtersItems = [];
  public filtersItems = [
    {
      img: 'assets/images/auto.jpg',
      km: 1800,
      price: 3500,
      country: 'Toronto',
      model: 'toyota'
    },
    {
      img: 'assets/images/auto.jpg',
      km: 1800,
      price: 3500,
      country: 'Nunavut',
      model: 'toyota'
    },
    {
      img: 'assets/images/auto.jpg',
      km: 1800,
      price: 3500,
      country: 'Manitoba',
      model: 'honda'
    },
    {
      img: 'assets/images/auto.jpg',
      km: 1800,
      price: 3500,
      country: 'Toronto',
      model: 'bmw'
    },
    {
      img: 'assets/images/auto.jpg',
      km: 1800,
      price: 3500,
      country: 'Manitoba',
      model: 'toyota'
    },
    {
      img: 'assets/images/auto.jpg',
      km: 1800,
      price: 3500,
      country: 'Toronto',
      model: 'bmw'
    }
  ]

  constructor() {
    this._filtersItems = this.filtersItems
  }


  filtersChange($event: FilterModel): void {    
    if ($event.country) {
      this._filtersItems = this.filtersItems.filter(items => items.country ===  $event.country)
    }

    if ($event.brand) {
      this._filtersItems = this._filtersItems.filter(items => items.model ===  $event.brand)
    }

    if ($event.price) {
      this._filtersItems = this._filtersItems.filter(items => items.price ===  $event.price)
    }
  }
}
