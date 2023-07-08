import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageAreaComponent } from './percentage-area/percentage-area.component';
import { HighchartsChartModule } from 'highcharts-angular'

@NgModule({
  declarations: [
    PercentageAreaComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    PercentageAreaComponent
  ]
})
export class WidgetsModule { }
