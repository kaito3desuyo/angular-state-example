import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AkitaStateRoutingModule } from './akita-state-routing.module';
import { AkitaStateComponent } from './akita-state.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AkitaStateComponent],
    imports: [CommonModule, ReactiveFormsModule, AkitaStateRoutingModule],
})
export class AkitaStateModule {}
