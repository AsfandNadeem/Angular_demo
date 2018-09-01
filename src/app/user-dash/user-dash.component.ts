import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(private _logService : LoginService, private  route: Router) { }

  ngOnInit() {
    if(!this._logService.check())
    {
      console.log(this._logService.username);
        //this.route.navigateByUrl('login');
    }else { console.log(this._logService.username); }
  }

}
