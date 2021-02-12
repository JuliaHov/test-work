import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public brands = ['toyota', 'bmw', 'honda'];
  public countries = ['Toronto', 'Manitoba', 'Nunavut'];
  public _price: number;

  public brandControl: FormControl;
  public countryControl: FormControl;
  public priceControl: FormControl;

  @Output() filtersChange: EventEmitter<any> = new EventEmitter();
  constructor() { 
    
  }

  ngOnInit(): void {
    this.brandControl = new FormControl();
    this.countryControl = new FormControl();
    this.priceControl = new FormControl();
    this.initFilter()
   }

   initFilter() {
    this.brandControl.valueChanges.subscribe((value) => {      
      this.filtersChange.emit({ brand: value });
    });

    this.countryControl.valueChanges.subscribe((value) => {
      this.filtersChange.emit({ country: value });
    });

    this.priceControl.valueChanges.subscribe((value) => {
      this.filtersChange.emit({ price: value });
    });

   }
  
}
