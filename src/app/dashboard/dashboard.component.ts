import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  token: string;
  constructor(private loginService: LoginService) {
    this.token = this.loginService.usuarioLogado;
  }

  ngOnInit() {}
}
