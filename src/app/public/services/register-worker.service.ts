import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterWorkerService {
  private apiUrl = 'http://localhost:3000/users';
  private profileUrl = 'http://localhost:3000/profiles'; // Asegúrate de que este endpoint exista
  private currentUserId: number | null = null;

  constructor(private http: HttpClient) {}

  // Usado para registrar al trabajador
  addUserWorker(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  // Guarda el ID actual para usos posteriores si es necesario
  setCurrentUserId(id: number) {
    this.currentUserId = id;
  }

  // Crea el perfil con imagen usando workerId
  addImageProfile(profileData: any): Observable<any> {
    return this.http.post<any>(this.profileUrl, profileData);
  }

  // Método de login (si lo necesitas más adelante)
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
