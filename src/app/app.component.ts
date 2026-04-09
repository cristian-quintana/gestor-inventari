import { Component } from '@angular/core';
//import { ElementService } from './serveis/element.service';
//import { CommonModule } from '@angular/common';
//import { LlistaProductesComponent } from './components/llista-productes/llista-productes.component';
//import { DADES_MOCK } from './mocks/dades-mock';
//import { Producte } from './models/producte.model';
//import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //CommonModule,
    //LlistaProductesComponent,
    //BarraCercaComponent,
    CatalegPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "Gestor d'Inventari";
}

/*productes: Producte[] = DADES_MOCK;
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
    */
