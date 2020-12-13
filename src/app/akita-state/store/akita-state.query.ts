import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AkitaStateStore, TodosState } from './akita-state.store';

@Injectable({ providedIn: 'root' })
export class AkitaStateQuery extends QueryEntity<TodosState> {
    todos$ = this.selectAll();

    constructor(protected store: AkitaStateStore) {
        super(store);
    }
}
