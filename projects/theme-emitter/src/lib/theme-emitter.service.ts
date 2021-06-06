import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Theme } from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeEmitterService {

  private theme$ = new ReplaySubject<Theme>(1);

  constructor() {
  }

  getTheme$(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  setTheme(theme: Theme): void {
    this.theme$.next(theme);
  }
}
