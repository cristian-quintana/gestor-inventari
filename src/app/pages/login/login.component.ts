import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  iniciarSessio(): void {
    this.error = '';

    const loginCorrecte = this.authService.login(this.email, this.contrasenya);

    if (loginCorrecte) {
      this.router.navigate(['/preferits']);
      return;
    }

    this.error = 'Credencials incorrectes. Revisa el correu i la contrasenya.';
  }
}
