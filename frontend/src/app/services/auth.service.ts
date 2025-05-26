import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081';

  login(username: string, password: string): Observable<any> {
    const headers = {
      Authorization: 'Basic ' + btoa(`${username}:${password}`)
    };
    return this.http.get(`${this.apiUrl}/api/auth/check`, { headers });
  }

  saveCredentials(username: string, password: string) {
    localStorage.setItem('auth', btoa(`${username}:${password}`));
  }

  getAuthHeader(): string | null {
    const encoded = localStorage.getItem('auth');
    return encoded ? `Basic ${encoded}` : null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');
  }

  logout(): void {
    localStorage.removeItem('auth');
  }
}
