import {Component, Input, OnInit} from '@angular/core';
import {CategoryItem} from '../../models/category-item.entity';
import { CommonModule } from '@angular/common';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ApexDataLabels,
  ApexTooltip
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  colors: string[];
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-category-chart.component',
  imports: [],
  templateUrl: './category-chart.component.component.html',
  styleUrl: './category-chart.component.component.css'
})
export class CategoryChartComponent implements OnInit {
  @Input() categories: CategoryItem[] = [];
  @Input() title: string = 'Categories';
  @Input() type: 'revenue' | 'expenses' = 'revenue';

  public chartOptions: Partial<DonutChartOptions> = {
    series: [],
    chart: {
      type: 'donut',
      height: 300
    },
    labels: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: [],
    tooltip: {
      y: {
        formatter: function(value) {
          return '$' + value.toLocaleString();
        }
      }
    }
  };

  // Color palettes
  private revenueColors = ['#D9A566', '#E6C08D', '#F2D4AA', '#D9B980', '#C09356', '#E6B559'];
  private expensesColors = ['#8E2941', '#B34B64', '#D56F87', '#E698AC', '#F7C1CD', '#692030'];

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart() {
    if (this.categories.length === 0) return;

    const values = this.categories.map(item => item.amount);
    const labels = this.categories.map(item => item.category);

    this.chartOptions.series = values;
    this.chartOptions.labels = labels;
    this.chartOptions.colors = this.type === 'revenue' ? this.revenueColors : this.expensesColors;
  }

  getColor(index: number): string {
    const colors = this.type === 'revenue' ? this.revenueColors : this.expensesColors;
    return colors[index % colors.length];
  }

}
