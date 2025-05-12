import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.entity';
import { NotificationService } from '../../services/notification.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-notification-list',
  imports: [
    NgForOf
  ],
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[] = [];

  newNotificationAdded: Notification = {
    id: 0,
    title: '',
    description: '',
    type: '',
    date: new Date()
  };

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getNotifications().subscribe((data: Notification[]) => {
      this.notifications = data;
    });
  }

  //Add Notification

  //Remove Notification
}
