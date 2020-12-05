import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsStateComponent } from './rxjs-state.component';

const routes: Routes = [{ path: '', component: RxjsStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsStateRoutingModule { }
