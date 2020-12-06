import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxStateRoutingModule } from './ngrx-state-routing.module';
import { NgrxStateComponent } from './ngrx-state.component';
import { NgrxStateStoreModule } from './store/ngrx-state-store.module';

@NgModule({
    declarations: [NgrxStateComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgrxStateRoutingModule,
        NgrxStateStoreModule,
    ],
})
export class NgrxStateModule {}
