import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ElementService } from '../../serveis/element.service';
import { codiDisponibleValidator } from '../../validadors/codi-disponible.validator';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss',
})
export class FormulariCercaComponent implements OnInit {
  formulariCerca!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly elementService: ElementService,
  ) {}

  ngOnInit(): void {
    this.formulariCerca = this.fb.group({
      termeCerca: [
        '',
        [Validators.minLength(2), Validators.maxLength(50)],
        [codiDisponibleValidator(this.elementService)],
      ],
    });

    this.termeCercaControl?.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((valor) => {
        const terme = String(valor ?? '').trim();

        if (!terme) {
          this.elementService.obtenirPopulars();
          return;
        }

        const teErrorsSincrons =
          this.termeCercaControl?.hasError('minlength') ||
          this.termeCercaControl?.hasError('maxlength');

        if (!teErrorsSincrons) {
          this.elementService.cercar(terme);
        }
      });
  }

  get termeCercaControl() {
    return this.formulariCerca.get('termeCerca');
  }

  get mostrarBotoNetejar(): boolean {
    return !!this.termeCercaControl?.value;
  }

  netejar(): void {
    this.formulariCerca.reset();
    this.elementService.obtenirPopulars();
  }
}
