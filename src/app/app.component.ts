import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LlistaProductesComponent } from './components/llista-productes/llista-productes.component';
import { DADES_MOCK } from './mocks/dades-mock';
import { Producte } from './models/producte.model';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    LlistaProductesComponent,
    BarraCercaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "Gestor d'Inventari";

  productes: Producte[] = DADES_MOCK;
  productesFiltrats: Producte[] = DADES_MOCK;

  onCercaCanviada(text: string): void {
    const terme = text.toLowerCase().trim();

    if (!terme) {
      this.productesFiltrats = this.productes;
      return;
    }

    this.productesFiltrats = this.productes.filter(
      (producte) =>
        producte.nom.toLowerCase().includes(terme) ||
        producte.categoria?.toLowerCase().includes(terme),
    );
  }
}
