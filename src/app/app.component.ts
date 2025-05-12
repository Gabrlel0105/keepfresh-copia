import { Component } from '@angular/core';
import {NotificationListComponent} from './notification/components/notification-list/notification-list.component';

@Component({
  selector: 'app-root',
  imports: [
    NotificationListComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeepItFresh';

}
