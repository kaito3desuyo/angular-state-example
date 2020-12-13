import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        //!environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
})
export class AppStoreModule {}
