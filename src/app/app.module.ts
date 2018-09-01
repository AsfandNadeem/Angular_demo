import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import {LoginService} from "./services/login.service";
import { DocTrackComponent } from './doc-track/doc-track.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { DocumentsComponent } from './documents/documents.component';
import { AdminComponent } from './admin/admin.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { SecurityComponent } from './security/security.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { HttpHeaders } from '@angular/common/http';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { NgTree } from "ng.tree";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashComponent,
    DocTrackComponent,
    WorkflowComponent,
    DocumentsComponent,
    AdminComponent,
    GroupsComponent,
    UsersComponent,
    SecurityComponent,
    InboxComponent,
    OutboxComponent,
    TableComponent,
    TableRowComponent,
    NgTree

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
