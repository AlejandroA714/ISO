import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  auth = inject(AuthService);

  get isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    location.reload(); // o usar router.navigate para redirigir a /
  }
}
