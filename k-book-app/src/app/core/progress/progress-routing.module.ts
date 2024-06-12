import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProgressComponent}from './progress.component';
import {StadisticsComponent}from './stadistics/stadistics.component'

const routes: Routes = [
  {path: '', component: ProgressComponent},
  {path: 'stadistics', component: StadisticsComponent} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
