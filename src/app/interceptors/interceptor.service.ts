import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({ providedIn: 'root' })
export class InterceptorApi implements HttpInterceptor {
  constructor(private loginService: LoginService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const usuarioAutenticado = this.loginService.usuarioLogado;
    if (usuarioAutenticado) {
      req = this.adicionarToken(req, usuarioAutenticado);
    }

    return next.handle(req);
  }

  private adicionarToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        Authoriation: `Bearer ${token}`
      }
    });
  }
}
