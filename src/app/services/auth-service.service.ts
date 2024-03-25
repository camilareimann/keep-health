import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    this.loggedIn = !!localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<boolean> {
    this.loggedIn = true;
    localStorage.setItem('token', 'yourAuthTokenHere');
        return of(true);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token');
  }
}
