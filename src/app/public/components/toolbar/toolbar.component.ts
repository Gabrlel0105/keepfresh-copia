import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  imports: [
    CommonModule,
    MatToolbar,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './toolbar.component.html',
  standalone: true,
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() menuToggled = new EventEmitter<void>();

  toggleMenu() {
    this.menuToggled.emit();
  }

}
