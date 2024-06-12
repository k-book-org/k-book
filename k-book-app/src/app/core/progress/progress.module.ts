import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/components.module';
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
    ProgressRoutingModule,
    SharedModule
  ]
})
export class ProgressModule { }
