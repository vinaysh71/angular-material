import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from "../material/material.module";

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NotesComponent } from './component/notes/notes.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent, NotesComponent
  ]
})
export class ContactmanagerModule { }
