import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, Usuari } from '../../serveis/auth.service';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navegacio.component.html',
  styleUrl: './navegacio.component.scss',
})
export class NavegacioComponent {
  usuari$: Observable<Usuari | null>;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.usuari$ = this.authService.obtenirUsuari();
  }

  tancarSessio(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
