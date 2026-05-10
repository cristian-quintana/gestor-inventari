import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ElementCataleg } from '../../models/element.model';
import { TargetaProducteComponent } from '../../components/targeta-producte/targeta-producte.component';
@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    FormulariCercaComponent,
    TargetaProducteComponent,
  ], // Added providers for dependency injection
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss',
})
export class CatalegPageComponent implements OnInit {
  readonly alcadaElement = 420;

  readonly elementsVirtualitzats = computed<ElementCataleg[]>(() => {
    const elements = this.elementService.elements();

    if (elements.length === 0) {
      return [];
    }

    return Array.from({ length: 60 }, (_, index) => {
      const element = elements[index % elements.length];

      return {
        ...element,
        id: `${element.id}-${index + 1}`,
        titol: `${element.titol} ${index + 1}`,
      };
    });
  });
  constructor(public elementService: ElementService) {}
  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }
}
