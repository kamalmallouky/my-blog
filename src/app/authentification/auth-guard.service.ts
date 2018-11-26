import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthentificationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.auth.login();
      return false;
    }
    return true;
  }

}
