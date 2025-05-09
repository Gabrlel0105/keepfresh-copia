import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {InventoryTable} from './inventory/components/inventory-table/inventory-table.component';

@Component({
  selector: 'app-root',
  imports: [InventoryTable],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeepItFresh';

  options =[
    { link: '/home', label: 'home'}
  ]

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
