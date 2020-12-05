import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsExampleComponent } from './rxjs-example.component';

const routes: Routes = [{ path: '', component: RxjsExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsExampleRoutingModule { }
