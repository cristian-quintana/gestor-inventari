import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitsService } from '../../serveis/preferits.service';
import { ElementCataleg } from '../../models/element.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-targeta-producte',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './targeta-producte.component.html',
  styleUrl: './targeta-producte.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargetaProducteComponent {
  @Input({ required: true }) producte!: ElementCataleg;
  constructor(public preferitsService: PreferitsService) {}

  togglePreferit(): void {
    if (this.preferitsService.esPreferit(this.producte.id)) {
      this.preferitsService.eliminarPreferit(this.producte.id);
    } else {
      this.preferitsService.afegirPreferit(this.producte);
    }
  }
}
