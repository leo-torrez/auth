import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, stateRoute: RouterStateSnapshot) {
    const usuarioLogado = this.loginService.usuarioLogado; /* todo Usuario Logado */

    if (usuarioLogado) {
      return true;
    }

    /**
     * Caso o usuário não esteja logado será redirecionado para tela de não autorizado
     */
    this.router.navigate(['/sem-permissao']);
    return false;
  }
}
