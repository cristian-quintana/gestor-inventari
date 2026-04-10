import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ElementService } from '../serveis/element.service';

export function codiDisponibleValidator(
  elementService: ElementService,
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const terme = String(control.value ?? '').trim();

    if (!terme) {
      return of(null);
    }

    if (terme.length < 2) {
      return of(null);
    }

    return timer(500).pipe(
      switchMap(() => elementService.comprovarSiHiHaResultats(terme)),
      map((hiHaResultats) => (hiHaResultats ? null : { sensResultats: true })),
      catchError(() => of(null)),
    );
  };
}