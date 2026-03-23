import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss',
})
export class BarraCercaComponent {
  textCerca: string = '';

  @Output() cercaCanviada = new EventEmitter<string>();

  enviarCerca(): void {
    this.cercaCanviada.emit(this.textCerca.trim());
  }
}
