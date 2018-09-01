import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {UserDashComponent} from './user-dash/user-dash.component';
import {WorkflowComponent} from "./workflow/workflow.component";
import {DocumentsComponent} from "./documents/documents.component";
import {DocTrackComponent} from "./doc-track/doc-track.component";
import { AdminComponent } from "./admin/admin.component";
import { SecurityComponent } from "./security/security.component";
import { UsersComponent } from "./users/users.component";
import { GroupsComponent } from "./groups/groups.component";
import { InboxComponent } from "./inbox/inbox.component";
import { OutboxComponent } from "./outbox/outbox.component";

const routes: Routes = [
  {path : '', redirectTo: '/login',
    pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: UserDashComponent,
    children: [
    { path: 'workflow', component: WorkflowComponent },
    { path: 'documents', component: DocumentsComponent},
      { path: 'track', component: DocTrackComponent,
        children : [
          { path: 'inbox', component: InboxComponent },
          { path: 'outbox', component: OutboxComponent}
        ]},
      { path: 'admin', component: AdminComponent,
        children : [
          { path: 'security', component: SecurityComponent },
          { path: 'users', component: UsersComponent},
          { path: 'groups', component: GroupsComponent},
        ]},
              ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
