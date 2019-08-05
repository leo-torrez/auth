import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SemPermissaoComponent } from './sem-permissao/sem-permissao.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterceptorApi } from './interceptors/interceptor.service';
import { ErrorInterceptor } from './interceptors/error.intercepetor.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, SemPermissaoComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorApi,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
