import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producte } from '../../models/producte.model';

@Component({
  selector: 'app-targeta-producte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-producte.component.html',
  styleUrl: './targeta-producte.component.scss',
})
export class TargetaProducteComponent {
  @Input() producte!: Producte;
}
