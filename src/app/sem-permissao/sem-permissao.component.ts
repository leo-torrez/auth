import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-permissao',
  templateUrl: './sem-permissao.component.html',
  styleUrls: ['./sem-permissao.component.scss']
})
export class SemPermissaoComponent implements OnInit {
  segundos = 30;
  contador;
  counter = 30;
  constructor(private router: Router) {}

  ngOnInit() {
    this.contador = timer(0, 1000)
      .pipe(
        take(this.counter),
        map(() => --this.counter)
      )
      .subscribe(contador => {
        this.segundos = contador;
        if (this.segundos < 1) {
          this.router.navigate(['/login']);
        }
      });
  }
}
