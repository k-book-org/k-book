import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = "http://localhost:3000/api/v1"

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios`)
  }

  registerUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/usuarios`, usuario)
  }

  authUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth`, usuario)
  }

}
