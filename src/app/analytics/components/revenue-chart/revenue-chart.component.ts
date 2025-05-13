import {Component, OnInit} from '@angular/core';
import {MonthlyFinancial} from '../../models/montly-financial.entity';
import {FinancialService} from '../../services/financial-service.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexFill
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {CommonModule} from '@angular/common';
import {CardComponent} from '../card/card.component';
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
  selector: 'app-revenue-chart',
  imports: [CommonModule, NgApexchartsModule, CardComponent],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.css'
})
export class RevenueChartComponent implements OnInit{
  public chartOptions: Partial<ChartOptions> | null = null;
  private monthlyData: MonthlyFinancial[] = [];
  private chartType: 'line' | 'area' | 'bar' = 'line';

  constructor(private financialService: FinancialService) {}

  ngOnInit(): void {
    this.financialService.getMonthlyData().subscribe(data => {
      this.monthlyData = data;
      this.initializeChart();
    });
  }

  updateChartType(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.chartType = select.value as 'line' | 'area' | 'bar';
    this.initializeChart();
  }

  private initializeChart(): void {
    const months = this.monthlyData.map(item => item.month);
    const revenue = this.monthlyData.map(item => item.revenue);
    const expenses = this.monthlyData.map(item => item.expenses);
    const profit = this.monthlyData.map(item => item.profit);

    this.chartOptions = {
      series: [
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
      ],
      chart: {
        height: 350,
        type: this.chartType,
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
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
        width: 3
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
        size: 5
      },
      xaxis: {
        categories: months,
        title: {
          text: ''
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
        opacity: this.chartType === 'area' ? 0.3 : 1,
        type: this.chartType === 'area' ? 'gradient' : undefined,
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.2,
        }
      }
    };
  }

}
