import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxModule } from './flexbox/flexbox.module';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flex', component: FlexboxModule },
  { path: '**', redirectTo: 'buttons' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
