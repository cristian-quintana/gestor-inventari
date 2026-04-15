import { computed, Injectable, signal } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

interface PreferitsStorage {
  preferits: ElementCataleg[];
  notesPerPreferit: Record<string, string[]>;
}
@Injectable({
  providedIn: 'root',
})
export class PreferitsService {
  private readonly CLAU_STORAGE = 'preferits-cataleg';
  private readonly preferitsSignal = signal<ElementCataleg[]>([]);
  private readonly notesPerPreferitSignal = signal<Record<string, string[]>>(
    {},
  );
  readonly preferits = this.preferitsSignal.asReadonly();
  readonly totalPreferits = computed(() => this.preferitsSignal().length);
  readonly notesPerPreferit = this.notesPerPreferitSignal.asReadonly();
  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    try {
      const dades = localStorage.getItem(this.CLAU_STORAGE);

      if (!dades) {
        this.preferitsSignal.set([]);
        this.notesPerPreferitSignal.set({});
        return;
      }

      const dadesParsejades = JSON.parse(dades) as PreferitsStorage;

      this.preferitsSignal.set(dadesParsejades.preferits ?? []);
      this.notesPerPreferitSignal.set(dadesParsejades.notesPerPreferit ?? {});
    } catch (error) {
      console.error('Error carregant preferits de localStorage:', error);
      this.preferitsSignal.set([]);
      this.notesPerPreferitSignal.set({});
    }
  }

  private desarPreferits(): void {
    try {
      const dades: PreferitsStorage = {
        preferits: this.preferitsSignal(),
        notesPerPreferit: this.notesPerPreferitSignal(),
      };

      localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(dades));
    } catch (error) {
      console.error('Error desant preferits a localStorage:', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    if (this.esPreferit(element.id)) {
      return;
    }

    this.preferitsSignal.update((preferits) => [...preferits, element]);
    this.notesPerPreferitSignal.update((notes) => ({
      ...notes,
      [element.id]: notes[element.id] ?? [],
    }));
    this.desarPreferits();
  }

  eliminarPreferit(id: string): void {
    this.preferitsSignal.update((preferits) =>
      preferits.filter((preferit) => preferit.id !== id),
    );

    this.notesPerPreferitSignal.update((notes) => {
      const novesNotes = { ...notes };
      delete novesNotes[id];
      return novesNotes;
    });

    this.desarPreferits();
  }

  esPreferit(id: string): boolean {
    return this.preferitsSignal().some((preferit) => preferit.id === id);
  }

  obtenirNotes(id: string): string[] {
    return this.notesPerPreferitSignal()[id] ?? [];
  }

  guardarNotes(id: string, notes: string[]): void {
    this.notesPerPreferitSignal.update((notesActuals) => ({
      ...notesActuals,
      [id]: notes,
    }));
    this.desarPreferits();
  }
}
