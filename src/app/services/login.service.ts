import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public username = 'a';

  constructor() { }

  public check() {
    if ( this.username === 'a') {
        return false;
    } else {return true; }
  }

}
