import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Http,Response} from'@angular/http';
import {  HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  columns=[];
  uname='';
  dename="";
  email="";
  pass="";
  dpname="";

  data=[];

  constructor(private http:Http, private httpC:HttpClient) { }

  ngOnInit() {
  
    
    this.columns = ["name", "Department", "Designation","Email","Edit","Remove"];
    this.showdata();
    
   // this.characters = this.atService.getCharacters();
    // all data in mock-data.ts
  }
  

  submitdata(){
    
    this.http.post("http://localhost/API/addUser",{name:this.uname,desname:this.dename,email:this.email,password:this.pass,depname:this.dpname})
    .subscribe(result=>this.showdata());
    
    
  }

  showdata(){
    //console.log(this.gname);
    this.http.get("http://localhost/API/getUsers")
    .subscribe(result=>this.data=JSON.parse(result._body));
  }

}
