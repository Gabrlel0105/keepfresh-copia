import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {InventoryTable} from '../../components/inventory-table/inventory-table.component';

@Component({
  selector: 'app-inventory',
  imports: [
    CommonModule,
    RouterModule,
    InventoryTable,
  ],
  templateUrl: './inventory.component.html',
  standalone: true,
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
