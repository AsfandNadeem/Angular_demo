import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _logService: LoginService , private  route : Router) { }

  ngOnInit() {
          console.log(this._logService.username);
  }

  login()
  {
    this._logService.username = "asfand";
    console.log(this._logService.username);
    this.route.navigateByUrl("dashboard");

  }
}
