import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AuthGuardService} from './auth-guard.service';
import {AuthentificationService} from './authentification.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './token-interceptor.service';

@NgModule({
  imports: [
    CommonModule, RouterModule, HttpClientModule
  ],
  exports: [],
  providers: [AuthGuardService, AuthentificationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  declarations: []
})
export class AuthentificationModule { }
