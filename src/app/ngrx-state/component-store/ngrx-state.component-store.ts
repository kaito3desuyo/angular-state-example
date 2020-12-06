import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Todo } from 'src/app/types/todo';

type State = {
    list: Todo[];
    onlyViewNotDone: boolean;
};

@Injectable()
export class NgrxStateComponentStore extends ComponentStore<State> {
    readonly list$ = this.select((state) => state.list);
    readonly onlyViewNotDone$ = this.select((state) => state.onlyViewNotDone);

    readonly setList = this.updater((state, todos: Todo[]) => ({
        ...state,
        list: todos,
    }));
    readonly setOnlyViewNotDone = this.updater((state, bool: boolean) => ({
        ...state,
        onlyViewNotDone: bool,
    }));

    constructor() {
        super({ list: [], onlyViewNotDone: false });
    }
}
