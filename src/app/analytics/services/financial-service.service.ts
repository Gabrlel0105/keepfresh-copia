import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {FinancialData} from '../models/financial-data.entity';
import {MonthlyFinancial} from '../models/montly-financial.entity';
import {DailyFinancial} from '../models/daily-financial.entity';
import {Categories} from '../models/categories.entity';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  private apiUrl = environment.serverBaseUrl;

  constructor(private http: HttpClient) {}

  getFinancialData(): Observable<FinancialData> {
    return this.http.get<{ financial: FinancialData }>(`${this.apiUrl}/financial`)
      .pipe(map(response => response.financial));
  }

  getMonthlyData(): Observable<MonthlyFinancial[]> {
    return this.getFinancialData()
      .pipe(map(data => data.monthly));
  }

  getDailyData(): Observable<DailyFinancial[]> {
    return this.getFinancialData()
      .pipe(map(data => data.daily));
  }

  getCategoriesData(): Observable<Categories> {
    return this.getFinancialData()
      .pipe(map(data => data.categories));
  }

  calculateTotalRevenue(data: MonthlyFinancial[]): number {
    return data.reduce((sum, item) => sum + item.revenue, 0);
  }

  calculateTotalExpenses(data: MonthlyFinancial[]): number {
    return data.reduce((sum, item) => sum + item.expenses, 0);
  }

  calculateTotalProfit(data: MonthlyFinancial[]): number {
    return data.reduce((sum, item) => sum + item.profit, 0);
  }

  calculateProfitMargin(revenue: number, profit: number): number {
    return revenue > 0 ? (profit / revenue) * 100 : 0;
  }
}
