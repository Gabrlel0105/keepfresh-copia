import { Component } from '@angular/core';
import {SideNavigationItem} from '../../models/side-navigation-item';
import {MatListItem, MatNavList} from '@angular/material/list';
import {CommonModule, NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navigation-bar',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    MatIcon,
  ],
  templateUrl: './side-navigation-bar.component.html',
  standalone: true,
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {

  sidenavItems: SideNavigationItem[] =[
    { label: 'Orders', icon: 'order', route: 'orders'},
    { label: 'Home', icon: 'home', route: 'home'}
  ];




}
