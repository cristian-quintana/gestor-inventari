import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PreferitsService } from '../../serveis/preferits.service';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss',
})
export class PreferitsPanelComponent {
  formularisNotes: Record<string, FormGroup> = {};

  constructor(
    private readonly fb: FormBuilder,
    public preferitsService: PreferitsService,
  ) {}

  trackByPreferit(index: number, preferit: ElementCataleg): string {
    return preferit.id;
  }

  trackByIndex(index: number): number {
    return index;
  }

  private crearControlNota(valor = ''): FormControl {
    return this.fb.control(valor, {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    });
  }

  private crearFormulariNotes(notesExistents: string[]): FormGroup {
    const notesArray = this.fb.array(
      notesExistents.length > 0
        ? notesExistents.map((nota) => this.crearControlNota(nota))
        : [this.crearControlNota('')],
    );

    return this.fb.group({
      notes: notesArray,
    });
  }

  obtenirFormulari(preferitId: string): FormGroup {
    if (!this.formularisNotes[preferitId]) {
      const notesExistents = this.preferitsService.obtenirNotes(preferitId);
      this.formularisNotes[preferitId] =
        this.crearFormulariNotes(notesExistents);
    }

    return this.formularisNotes[preferitId];
  }

  obtenirNotesArray(preferitId: string): FormArray {
    return this.obtenirFormulari(preferitId).get('notes') as FormArray;
  }

  afegirNota(preferitId: string): void {
    const notesArray = this.obtenirNotesArray(preferitId);

    const hiHaNotaBuida = notesArray.controls.some(
      (control) => String(control.value).trim().length === 0,
    );

    if (hiHaNotaBuida) {
      return;
    }

    notesArray.push(this.crearControlNota(''));
  }

  eliminarNota(preferitId: string, index: number): void {
    const notesArray = this.obtenirNotesArray(preferitId);

    notesArray.removeAt(index);

    const notesNetes = notesArray.controls
      .map((control) => String(control.value).trim())
      .filter((nota) => nota.length > 0);

    this.preferitsService.guardarNotes(preferitId, notesNetes);

    this.formularisNotes[preferitId] = this.crearFormulariNotes(notesNetes);
  }

  guardarNotes(preferitId: string): void {
    const notesArray = this.obtenirNotesArray(preferitId);

    notesArray.markAllAsTouched();

    if (notesArray.invalid) {
      return;
    }

    const notesNetes = notesArray.controls
      .map((control) => String(control.value).trim())
      .filter((nota) => nota.length > 0);

    this.preferitsService.guardarNotes(preferitId, notesNetes);

    this.formularisNotes[preferitId] = this.crearFormulariNotes(notesNetes);
  }
}
