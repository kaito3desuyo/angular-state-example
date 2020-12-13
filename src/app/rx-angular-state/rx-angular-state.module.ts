import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxAngularStateRoutingModule } from './rx-angular-state-routing.module';
import { RxAngularStateComponent } from './rx-angular-state.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RxAngularStateComponent],
    imports: [CommonModule, ReactiveFormsModule, RxAngularStateRoutingModule],
})
export class RxAngularStateModule {}
