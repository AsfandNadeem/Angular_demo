import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CHARACTERS } from './mock-data';
@Injectable({
  providedIn: 'root'
})
export class PopulateTableService {

  constructor() { }
  getCharacters(): Observable<any[]> {
    return of(CHARACTERS); }
  getColumns(): string[] {
    return ['name', 'age', 'species', 'occupation', 'approve/disaprove']; }
}

