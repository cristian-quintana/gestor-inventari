import { computed, Injectable, signal } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root',
})
export class PreferitsService {
  private readonly CLAU_STORAGE = 'preferits-cataleg';
  private readonly preferitsSignal = signal<ElementCataleg[]>([]);

  readonly preferits = this.preferitsSignal.asReadonly();
  readonly totalPreferits = computed(() => this.preferitsSignal().length);

  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    try {
      const dades = localStorage.getItem(this.CLAU_STORAGE);

      if (!dades) {
        this.preferitsSignal.set([]);
        return;
      }

      const preferits = JSON.parse(dades) as ElementCataleg[];
      this.preferitsSignal.set(preferits);
    } catch (error) {
      console.error('Error carregant preferits de localStorage:', error);
      this.preferitsSignal.set([]);
    }
  }

  private desarPreferits(): void {
    try {
      localStorage.setItem(
        this.CLAU_STORAGE,
        JSON.stringify(this.preferitsSignal()),
      );
    } catch (error) {
      console.error('Error desant preferits a localStorage:', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    if (this.esPreferit(element.id)) {
      return;
    }

    this.preferitsSignal.update((preferits) => [...preferits, element]);
    this.desarPreferits();
  }

  eliminarPreferit(id: string): void {
    this.preferitsSignal.update((preferits) =>
      preferits.filter((preferit) => preferit.id !== id),
    );
    this.desarPreferits();
  }

  esPreferit(id: string): boolean {
    return this.preferitsSignal().some((preferit) => preferit.id === id);
  }
}
