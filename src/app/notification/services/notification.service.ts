import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {Notification} from '../models/notification.entity';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(){
    return this.http.get<Notification[]>(environment.serverBaseUrlNotification);
  }

  addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(environment.serverBaseUrlNotification, notification);
  }
}
