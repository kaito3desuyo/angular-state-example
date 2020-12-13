import { InjectionToken } from '@angular/core';
import { Todo } from 'src/app/types/todo';
import { RxState } from '@rx-angular/state';

export interface RxAngularGlobalState {
    todos: Todo[];
}

export const GLOBAL_RX_STATE = new InjectionToken<
    RxState<RxAngularGlobalState>
>('GLOBAL_RX_STATE');
