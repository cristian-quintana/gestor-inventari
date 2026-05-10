import { Routes } from '@angular/router';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';
import { CercaComponent } from './pages/cerca/cerca.component';
import { DetallComponent } from './pages/detall/detall.component';
//import { PreferitsComponent } from './pages/preferits/preferits.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },
  { path: 'cataleg', component: CatalegPageComponent },
  { path: 'cerca', component: CercaComponent },
  { path: 'detall/:id', component: DetallComponent },
  {
    path: 'preferits',
    loadComponent: () =>
      import('./pages/preferits/preferits.component').then(
        (m) => m.PreferitsComponent,
      ),
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'cataleg' },
];
