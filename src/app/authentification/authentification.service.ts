import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  auth0 = new auth0.WebAuth({
    clientID: 'AGhxmVS2dL61tk7MtgronrKTzcd2HCu3',
    domain: 'mlkblog.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://mlkblog.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/posts',
    scope: 'openid profile email'
  });

  constructor(public router: Router) {}

  // redirct to the OIDC provider login page
  public login(): void {
    this.auth0.authorize();
  }

  // handle return from OIDC login page after login
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/posts']);
      } else if (err) {
        this.router.navigate(['/posts']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getAccessToken(): string {
    return localStorage.getItem('access_token');
  }
}
