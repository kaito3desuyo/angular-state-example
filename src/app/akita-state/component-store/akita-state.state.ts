import { Injectable } from '@angular/core';
import { guid, Query, Store } from '@datorama/akita';

type State = { onlyViewNotDone: boolean };

@Injectable()
export class AkitaStateComponentStore extends Store<State> {
    constructor() {
        super(
            {
                onlyViewNotDone: false,
            },
            { name: `AkitaState-${guid()}` }
        );
    }

    setOnlyViewNotDone(bool: boolean): void {
        this.update({ onlyViewNotDone: bool });
    }
}

@Injectable()
export class AkitaStateComponentQuery extends Query<State> {
    onlyViewNotDone$ = this.select('onlyViewNotDone');

    constructor(protected store: AkitaStateComponentStore) {
        super(store);
    }
}
