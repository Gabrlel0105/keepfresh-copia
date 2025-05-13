import {Component, OnInit} from '@angular/core';
import {DailyFinancial} from '../../models/daily-financial.entity';
import {FinancialService} from '../../services/financial-service.service';
import {ChartComponent} from 'ng-apexcharts';
import {CardComponent} from '../card/card.component';
import {DecimalPipe} from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
  colors: string[];
};

@Component({
  selector: 'app-daily-chart',
  imports: [
    ChartComponent,
    CardComponent,
    DecimalPipe
  ],
  templateUrl: './daily-chart.component.html',
  styleUrl: './daily-chart.component.css'
})
export class DailyChartComponent implements OnInit {

  public chartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      height: 300,
      type: 'bar',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    markers: {
      size: 3
    },
    xaxis: {
      categories: [],
      title: {
        text: 'Day of the Week'
      }
    },
    yaxis: {
      title: {
        text: 'Amount ($)'
      },
      labels: {
        formatter: function(val) {
          return '$' + val.toLocaleString();
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      floating: false,
      offsetY: -10
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(value) {
          return '$' + value.toLocaleString();
        }
      }
    },
    colors: ['var(--secondary)', 'var(--error)', 'var(--success)'],
    fill: {
      opacity: 0.8
    }
  };

  public dailyData: DailyFinancial[] = [];

  constructor(private financialService: FinancialService) {}

  ngOnInit(): void {
    this.financialService.getDailyData().subscribe(data => {
      this.dailyData = data;
      this.initializeChart();
    });
  }

  private initializeChart(): void {
    const days = this.dailyData.map(item => item.weekday);
    const revenue = this.dailyData.map(item => item.revenue);
    const expenses = this.dailyData.map(item => item.expenses);
    const profit = this.dailyData.map(item => item.profit);

    this.chartOptions.series = [
      {
        name: "Revenue",
        data: revenue
      },
      {
        name: "Expenses",
        data: expenses
      },
      {
        name: "Profit",
        data: profit
      }
    ];

    this.chartOptions.xaxis = {
      ...this.chartOptions.xaxis,
      categories: days
    };
  }

}
