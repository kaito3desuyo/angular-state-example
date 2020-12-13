import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { RxState } from '@rx-angular/state';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store/app-store.module';
import { AppComponent } from './app.component';
import {
    GLOBAL_RX_STATE,
    RxAngularGlobalState,
} from './rx-angular-state/store/rx-angular-state.state';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppStoreModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
    ],
    providers: [
        {
            provide: GLOBAL_RX_STATE,
            useFactory: () => new RxState<RxAngularGlobalState>(),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
