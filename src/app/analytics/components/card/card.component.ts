import {Component, Input} from '@angular/core';
import {CommonModule, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title?: string;
  @Input() noPadding = false;
  @Input() showActions = false;

}
