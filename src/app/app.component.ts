import { Component, Inject } from '@angular/core';
import { RxState } from '@rx-angular/state';
import {
    GLOBAL_RX_STATE,
    RxAngularGlobalState,
} from './rx-angular-state/store/rx-angular-state.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-state-example';

    constructor(
        @Inject(GLOBAL_RX_STATE) private state: RxState<RxAngularGlobalState>
    ) {
        this.state.set({ todos: [] });
    }
}
