import {Component, Input} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {NgClass, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-metric-card',
  imports: [
    CardComponent,
    NgClass,
    NgStyle,
    NgIf
  ],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.css'
})
export class MetricCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() prefix: string = '';
  @Input() format: string = 'number'; // 'number', 'currency', 'percent'
  @Input() icon: string = '';
  @Input() iconBgColor: string = 'var(--primary)';
  @Input() valueClass: string = '';

  @Input() showChange: boolean = false;
  @Input() changeValue: number = 0;

  get formattedValue(): string {
    if (this.format === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(this.value);
    } else if (this.format === 'percent') {
      return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }).format(this.value / 100);
    } else {
      return new Intl.NumberFormat('en-US').format(this.value);
    }
  }

  get changeClass(): string {
    if (this.changeValue > 0) return 'positive';
    if (this.changeValue < 0) return 'negative';
    return 'neutral';
  }

  get changeIcon(): string {
    if (this.changeValue > 0) return 'arrow_upward';
    if (this.changeValue < 0) return 'arrow_downward';
    return 'arrow_right_alt';
  }

}
