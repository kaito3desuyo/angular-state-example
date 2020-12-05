import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsExampleRoutingModule } from './rxjs-example-routing.module';
import { RxjsExampleComponent } from './rxjs-example.component';

@NgModule({
    declarations: [RxjsExampleComponent],
    imports: [CommonModule, RxjsExampleRoutingModule],
})
export class RxjsExampleModule {}
