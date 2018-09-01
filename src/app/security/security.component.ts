import { Component, OnInit } from '@angular/core';
import { NgTree } from "ng.tree";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],

})
export class SecurityComponent implements OnInit {

  public treeData: any[] = [{
    name: "folder",
    isOpen:true,
    iconSelector:"computer",
    nameSelector:"warning",
    nodes: [{
      name: 'file'
    }]
  },{
    name: 'another folder',
    nodes:[{
      name: 'another file'
    }]
  }];

  public treeConfig : any = {
    dataMap:{
      children:"nodes"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
