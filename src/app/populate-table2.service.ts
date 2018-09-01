import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CHARACTERS } from './mock-data';
@Injectable({
  providedIn: 'root'
})
export class PopulateTable2Service {

  constructor() { }
  getCharacters(): Observable<any[]> {
    return of(CHARACTERS); }
  getColumns(): string[] {
    return ['name', 'age', 'species', 'occupation']; }

}
