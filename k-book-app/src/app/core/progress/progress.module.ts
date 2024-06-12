import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';
import { StadisticsComponent } from './stadistics/stadistics.component';


@NgModule({
  declarations: [
    ProgressComponent,
    StadisticsComponent
  ],
  imports: [
    CommonModule,
    ProgressRoutingModule
  ]
})
export class ProgressModule { }
