import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNgrxState from './';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromNgrxState.ngrxStateFeatureKey,
            fromNgrxState.reducers,
            { metaReducers: fromNgrxState.metaReducers }
        ),
    ],
})
export class NgrxStateStoreModule {}
