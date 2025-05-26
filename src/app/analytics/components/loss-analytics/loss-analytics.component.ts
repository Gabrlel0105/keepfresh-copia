import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../inventory/services/product.service';
import {ChartComponent} from 'ng-apexcharts';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-loss-analytics',
  imports: [
    ChartComponent,
    NgIf
  ],
  templateUrl: './loss-analytics.component.html',
  styleUrl: './loss-analytics.component.css'
})
export class LossAnalyticsComponent implements OnInit{

  chartSeries: any[] = [];
  chartOptions: any = {};

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getTotalCostByWeekday().subscribe(totalsByDay => {
      const orderedDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const data = orderedDays.map(day => totalsByDay[day] ?? 0);

      this.chartSeries = [{
        name: 'Total Cost',
        data: data,
        color: '#FF0000',
      }];

      this.chartOptions = {
        chart: { type: 'area', height: 350 },
        stroke: { curve: 'smooth' },
        dataLabels: { enabled: false },
        xaxis: { categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
        tooltip: { x: { format: 'dddd' } },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 90, 100]
          }
        }
      };
    });
  };

}
