import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navegacio.component.html',
  styleUrl: './navegacio.component.scss',
})
export class NavegacioComponent {}