import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  textCerca: string = '';

  @Output() cercaCanviada = new EventEmitter<string>();

  actualitzarText(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.textCerca = input.value;
  }

  enviarCerca(): void {
    this.cercaCanviada.emit(this.textCerca);
  }
}