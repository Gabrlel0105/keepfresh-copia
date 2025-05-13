import {MonthlyFinancial} from './montly-financial.entity';
import {Categories} from './categories.entity';
import {DailyFinancial} from './daily-financial.entity';

export interface FinancialData {
  monthly: MonthlyFinancial[];
  categories: Categories;
  daily: DailyFinancial[];
}
