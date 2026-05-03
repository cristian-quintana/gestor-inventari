import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ElementCataleg } from '../../models/element.model';
import { ElementService } from '../../serveis/element.service';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss',
})
export class DetallComponent implements OnInit {
  id: string | null = null;
  element: ElementCataleg | undefined;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.element = this.elementService
      .elements()
      .find((element) => element.id === this.id);
  }
}
