import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ElementCataleg, ElementApiResponse } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private readonly elementsSignal = signal<ElementCataleg[]>([]);
  private readonly carregantSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);
  readonly elements = this.elementsSignal.asReadonly();
  readonly carregant = this.carregantSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  /**
   * Obté els elements populars del catàleg
   */
  obtenirPopulars(): void {
    this.carregantSignal.set(true);
    this.errorSignal.set(null);

    this.http
      .get<ElementApiResponse[]>(`${this.apiUrl}/elements?popular=true`)
      .pipe(
        map(adaptarElementsApi),
        tap((elements) => {
          this.elementsSignal.set(elements);
          this.carregantSignal.set(false);
        }),
        catchError((error: HttpErrorResponse) => {
          const missatgeError = this.gestionarError(error);
          this.errorSignal.set(missatgeError);
          this.elementsSignal.set([]);
          this.carregantSignal.set(false);
          return of([]);
        }),
      )
      .subscribe();
  }

  /**
   * Cerca elements per terme de cerca
   */
  cercar(terme: string): void {
    const termeNet = terme.trim();

    if (!termeNet) {
      this.obtenirPopulars();
      return;
    }

    this.carregantSignal.set(true);
    this.errorSignal.set(null);

    this.http
      .get<ElementApiResponse[]>(
        `${this.apiUrl}/elements?nom_like=${encodeURIComponent(termeNet)}`,
      )
      .pipe(
        map(adaptarElementsApi),
        tap((elements) => {
          this.elementsSignal.set(elements);
          this.carregantSignal.set(false);
        }),
        catchError((error: HttpErrorResponse) => {
          const missatgeError = this.gestionarError(error);
          this.errorSignal.set(missatgeError);
          this.elementsSignal.set([]);
          this.carregantSignal.set(false);
          return of([]);
        }),
      )
      .subscribe();
  }

  comprovarSiHiHaResultats(terme: string): Observable<boolean> {
    const termeNet = terme.trim();

    if (!termeNet) {
      return of(true);
    }

    return this.http
      .get<
        ElementApiResponse[]
      >(`${this.apiUrl}/elements?nom_like=${encodeURIComponent(termeNet)}`)
      .pipe(
        map((elements) => elements.length > 0),
        catchError(() => of(true)),
      );
  }

  /**
   * Reinicia l'estat del servei
   */
  reiniciar(): void {
    this.elementsSignal.set([]);
    this.carregantSignal.set(false);
    this.errorSignal.set(null);
  }

  /**
   * Gestiona errors HTTP i retorna missatges comprensibles
   */
  private gestionarError(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      // Error de client o xarxa
      return `Error de xarxa: ${error.error.message}`;
    }

    // Error del servidor
    switch (error.status) {
      case 0:
        return 'No es pot connectar al servidor. Comprova que json-server està actiu.';
      case 404:
        return "Endpoint no trobat. Verifica la URL de l'API.";
      case 500:
        return 'Error intern del servidor.';
      default:
        return `Error desconegut (${error.status}): ${error.message}`;
    }
  }
}
