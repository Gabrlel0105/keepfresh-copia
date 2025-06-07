import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterOwnerService {
  private baseUrl = environment.serverBaseUrl + environment.usersEndpointPath;
  private currentUserId: number | null = null;

  constructor(private http: HttpClient) {}

  addUser(userData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, userData);
  }

  setCurrentUserId(id: number) {
    this.currentUserId = id;
  }

  addimageprofile(profileData: any): Observable<any> {
    // Asumiendo que subir imagen es un POST a /users (o puedes tener otro endpoint)
    return this.http.post<any>(this.baseUrl, profileData);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`)
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
