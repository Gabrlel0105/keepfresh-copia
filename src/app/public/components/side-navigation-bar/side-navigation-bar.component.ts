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
    { label: 'Dashboard', icon: 'dashboard', route: 'pages/dashboard'},
    { label: 'Orders', icon: 'restaurant_menu', route: 'pages/orders'},
    { label: 'Inventory', icon: 'inventory_2', route: 'pages/products'},
    { label: 'Profile', icon: 'person', route: 'pages/login-owner'},
    { label: 'Notifications', icon: 'notification_important', route:'pages/notifications'}
  ];

}
