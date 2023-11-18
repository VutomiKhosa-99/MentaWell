import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public textArea: string = '';

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Mood Analysis'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Mood',
        data: [1, 12, 31, 6, 17, 20]
      } as any
    ]
  });

}
