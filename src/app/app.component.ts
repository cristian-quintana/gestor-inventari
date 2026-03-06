import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestor-inventari';
  
  constructor() {
    console.log("Aplicació Gestor d'Inventari iniciada correctament - Cristian Quintana");
  }
}
