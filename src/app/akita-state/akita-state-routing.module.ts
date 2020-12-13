import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkitaStateComponent } from './akita-state.component';

const routes: Routes = [{ path: '', component: AkitaStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AkitaStateRoutingModule { }
