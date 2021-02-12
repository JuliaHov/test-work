import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AutoComponent } from './auto/auto.component';
import { AutosListComponent } from './autos-list/autos-list.component';
import { PopularMarksComponent } from './popular-marks/popular-marks.component';
import { AutoTypeComponent } from './auto-type/auto-type.component';
import { PopularAutosComponent } from './popular-autos/popular-autos.component';
import { BestSellComponent } from './best-sell/best-sell.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
      AutoComponent,
      AutosListComponent,
      PopularMarksComponent,
      AutoTypeComponent,
      PopularAutosComponent,
      BestSellComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    AutoComponent,
    AutosListComponent
  ]
})
export class AutosModule { }
