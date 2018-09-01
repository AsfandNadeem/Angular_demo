import { Component, OnInit } from '@angular/core';
import {Http,Response} from'@angular/http';
import {  HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  columns=[];
  gname='';
  dname="";
  data=[];

 httpOptions = {
  headers : new Headers({'Content-Type': 'application/json'})
};

  constructor(private http:Http, private httpC:HttpClient) { }

  ngOnInit() {
    
    this.columns = ["name", "Department", "Remove"];
    this.showdata();
   // this.characters = this.atService.getCharacters();
    // all data in mock-data.ts
  }
  
  submitdata(){
    console.log(this.gname);
    this.http.post("http://localhost/API/addGroup",{groupname:this.gname,depname:this.dname})
    .subscribe(result=>this.showdata());
    
    
  }
  
  showdata(){
    //console.log(this.gname);
    this.http.get("http://localhost/API/getGroups")
    .subscribe(result=>this.data=JSON.parse(result._body));
  }

}
