import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { DADES_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    LlistaElementsComponent,
    BarraCercaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {


  title = "Gestor d'Inventari";

  elements: Element[] = DADES_MOCK;
  elementsFiltrats: Element[] = DADES_MOCK;

  onCercaCanviada(text: string): void {
    const terme = text.toLowerCase().trim();

    if (!terme) {
      this.elementsFiltrats = this.elements;
      return;
    }

    this.elementsFiltrats = this.elements.filter(
      (element) =>
        element.nom.toLowerCase().includes(terme) ||
        element.categoria?.toLowerCase().includes(terme),
    );
  }
}
