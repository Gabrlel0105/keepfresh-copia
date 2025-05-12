import { Component } from '@angular/core';
import {MatInput, MatLabel} from '@angular/material/input';
import {MatAnchor, MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-recover-password-owner',
  templateUrl: './recover-password-owner.component.html',
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    MatButton,
    RouterLink,
    MatLabel,
    MatLabel,
    MatLabel,
    MatLabel,
    MatLabel,
    MatLabel,
    MatLabel,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,

  ],
  styleUrls: ['./recover-password-owner.component.css']
})
export class RecoverPasswordOwnerComponent {
  email='';
  code='';
  clickAddTodo() {
    alert('Se envio un código de acceso a su correo!');
  }


}
