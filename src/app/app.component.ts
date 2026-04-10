import { Component } from '@angular/core';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalegPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "Gestor d'Inventari";
}
