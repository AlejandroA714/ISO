import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    const { username, password } = this.form.value;
    if (username && password) {
      this.auth.login(username, password).subscribe({
        next: () => {
          this.auth.saveCredentials(username, password);
          this.router.navigate(['/']); // redirige al inicio
        },
        error: () => alert('Credenciales incorrectas')
      });
    }
  }
}
