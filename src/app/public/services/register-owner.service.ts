import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterOwnerService {
  private apiUrl = 'http://localhost:3000/users';
  private profileUrl = 'http://localhost:3000/profiles'; // Ajusta si tu endpoint es diferente
  private currentUserId: number | null = null;

  constructor(private http: HttpClient) {}

  addUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  // Usado para guardar el ID del usuario actual después del registro
  setCurrentUserId(id: number) {
    this.currentUserId = id;
  }

  // Usado por el componente para subir la imagen de perfil
  addimageprofile(profileData: any): Observable<any> {
    return this.http.post<any>(this.profileUrl, profileData);
  }


  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            localStorage.setItem('userId', users[0].id);
            return users[0];
          } else {
            throw new Error('Credenciales inválidas');
          }
        })
      );
  }
}
