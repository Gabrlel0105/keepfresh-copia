import {Component, OnInit} from '@angular/core';
import {MonthlyFinancial} from '../../../analytics/models/montly-financial.entity';
import {CategoryItem} from '../../../analytics/models/category-item.entity';
import {FinancialService} from '../../../analytics/services/financial-service.service';
import {Categories} from '../../../analytics/models/categories.entity';
import {MetricCardComponent} from '../../../analytics/components/metric-card/metric-card.component';
import {CategoryChartComponent} from '../../../analytics/components/category-chart/category-chart.component';
import {DailyChartComponent} from '../../../analytics/components/daily-chart/daily-chart.component';
import {RevenueChartComponent} from '../../../analytics/components/revenue-chart/revenue-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MetricCardComponent,
    CategoryChartComponent,
    DailyChartComponent,
    RevenueChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  totalRevenue: number = 0;
  totalExpenses: number = 0;
  totalProfit: number = 0;
  profitMargin: number = 0;

  monthlyData: MonthlyFinancial[] = [];
  revenueCategories: CategoryItem[] = [];
  expenseCategories: CategoryItem[] = [];

  constructor(private financialService: FinancialService) {}

  ngOnInit(): void {
    this.loadMonthlyData();
    this.loadCategoriesData();
  }

  private loadMonthlyData(): void {
    this.financialService.getMonthlyData().subscribe(data => {
      this.monthlyData = data;
      this.calculateTotals();
    });
  }

  private loadCategoriesData(): void {
    this.financialService.getCategoriesData().subscribe((categoriesData: Categories) => {
      this.revenueCategories = categoriesData.revenue;
      this.expenseCategories = categoriesData.expenses;
    });
  }

  private calculateTotals(): void {
    this.totalRevenue = this.financialService.calculateTotalRevenue(this.monthlyData);
    this.totalExpenses = this.financialService.calculateTotalExpenses(this.monthlyData);
    this.totalProfit = this.financialService.calculateTotalProfit(this.monthlyData);
    this.profitMargin = this.financialService.calculateProfitMargin(this.totalRevenue, this.totalProfit);
  }

}
