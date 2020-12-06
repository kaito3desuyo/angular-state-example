import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxStateComponent } from './ngrx-state.component';

const routes: Routes = [{ path: '', component: NgrxStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxStateRoutingModule { }
