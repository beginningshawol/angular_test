import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-percentage-area',
  templateUrl: './percentage-area.component.html',
  styleUrls: ['./percentage-area.component.scss']
})
export class PercentageAreaComponent implements OnInit {
  chartOptions: {} = {}; 
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        useHTML: true,
        text: 'Guess the chart by its values',
        align: 'left'
      },
      subtitle: {
        text: 'Yes, those are Shrek characters',
        align: 'left'
      },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} millions, {point.percentage:.1f}%.'
        }
      },
      yAxis: {
        labels: {
          format: '{value}%'
        },
        title: {
          enabled: false
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} million)<br/>',
        split: true
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          pointStart: 2000
        },
        area: {
          stacking: 'percent',
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        name: 'Shrek',
        data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4,
          3.4, 3.5, 3.9, 4.5, 5.2, 5.9, 6.5, 7, 7.5, 7.9,
          8.6, 9.5, 9.8, 10]
        }, {
        name: 'Puss In Boots',
        data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8,
          6, 5.9, 5.9, 6, 6.1, 6.1, 6.1, 6.1, 5.9, 5.5,
          5.7, 5.5, 5.3, 5.5]
        }, {
        name: 'Gingerbread Man',
        data: [3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6,
          3.6, 3.7, 3.7, 3.7, 3.8, 3.7, 3.7, 3.7, 3.6, 3.3,
          3.4, 3.3, 3.3, 3.2]
        }, {
        name: 'Donkey',
        data: [0.6, 0.6, 0.7, 0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 
          1, 1, 1, 1.1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 
          1.7, 1.8, 2, 2]
      }]
    };

    HC_exporting(Highcharts);

  }
}
