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

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent
  ]
})
export class ContactmanagerModule { }
