import { Injectable } from '@angular/core';
import { Usuario } from '../model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public realizarLogin(usuario: Usuario) {
    return this.http
      .post<Usuario>('http://localhost:3000/auth/login', usuario)
      .pipe(tap(token => this.salvarToken(token)));
  }

  public salvarToken(token) {
    const { access_token } = token;
    localStorage.setItem('token', JSON.stringify(access_token));
  }

  public get usuarioLogado(): string {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  }
}
