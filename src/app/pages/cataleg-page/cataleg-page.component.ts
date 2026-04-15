import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { TargetaProducteComponent } from '../../components/targeta-producte/targeta-producte.component';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';
@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    CommonModule,
    PreferitsPanelComponent,
    FormulariCercaComponent,
    TargetaProducteComponent,
  ], // Added providers for dependency injection
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss',
})
export class CatalegPageComponent implements OnInit {
  constructor(public elementService: ElementService) {}
  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }
}
