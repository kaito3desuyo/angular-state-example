import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsStateRoutingModule } from './rxjs-state-routing.module';
import { RxjsStateComponent } from './rxjs-state.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RxjsStateComponent],
    imports: [CommonModule, ReactiveFormsModule, RxjsStateRoutingModule],
})
export class RxjsStateModule {}
