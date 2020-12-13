import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxAngularStateComponent } from './rx-angular-state.component';

const routes: Routes = [{ path: '', component: RxAngularStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxAngularStateRoutingModule { }
