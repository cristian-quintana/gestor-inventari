import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producte } from '../../models/producte.model';
import { TargetaProducteComponent } from '../targeta-producte/targeta-producte.component';

@Component({
  selector: 'app-llista-productes',
  standalone: true,
  imports: [CommonModule, TargetaProducteComponent],
  templateUrl: './llista-productes.component.html',
  styleUrl: './llista-productes.component.scss',
})
export class LlistaProductesComponent {
  @Input() productes: Producte[] = [];

  trackByElementId(index: number, producte: Producte): number {
    return producte.id;
  }

}
