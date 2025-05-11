import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // IMPORTANTE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ← IMPORTANTE para usar <router-outlet>
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Frontend-Web-Application';

}
