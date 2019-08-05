import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  verificarValidacao: boolean;
  erroUsuario = '';
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.redirecionarUsuarioLogado();
    this.construirLoginForm();
  }

  private redirecionarUsuarioLogado() {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/dashboard']);
    }
  }

  private construirLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  public enviarForm() {
    this.verificarValidacao = true;
    this.erroUsuario = '';
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.loginService.realizarLogin(value).subscribe(
        user => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.erroUsuario = error.message;
        }
      );
    }
  }
}
