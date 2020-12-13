import { Injectable } from '@angular/core';
import { guid, Query, Store } from '@datorama/akita';
import { Todo } from 'src/app/types/todo';

type State = { list: Todo[]; onlyViewNotDone: boolean };

@Injectable()
export class AkitaStateComponentStore extends Store<State> {
    constructor() {
        super(
            {
                list: [],
                onlyViewNotDone: false,
            },
            { name: `AkitaState-${guid()}` }
        );
    }

    setList(todos: Todo[]): void {
        this.update({ list: todos });
    }

    setOnlyViewNotDone(bool: boolean): void {
        this.update({ onlyViewNotDone: bool });
    }
}

@Injectable()
export class AkitaStateComponentQuery extends Query<State> {
    list$ = this.select('list');
    onlyViewNotDone$ = this.select('onlyViewNotDone');

    constructor(protected store: AkitaStateComponentStore) {
        super(store);
    }
}
