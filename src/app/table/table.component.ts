import { Component, OnInit } from '@angular/core';
import { PopulateTableService } from '../populate-table.service';
import { PopulateTable2Service } from '../populate-table2.service';

import {Observable} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  public href: string;
  constructor(private atService: PopulateTableService, private router: Router, private service2: PopulateTable2Service) { }

  ngOnInit() {
    this.href = this.router.url;
    if (this.href === '/dashboard/track/outbox') {
      console.log(this.router.url);
      this.columns = this.service2.getColumns();

    } else {
    this.columns = this.atService.getColumns();
    // ["name", "age", "species", "occupation"]
    }
    this.characters = this.atService.getCharacters();
    // all data in mock-data.ts
  }

}
