import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from 'src/app/types/todo';

export interface TodosState extends EntityState<Todo, string> {}

@StoreConfig({ name: 'todos' })
@Injectable({ providedIn: 'root' })
export class AkitaStateStore extends EntityStore<TodosState> {
    constructor() {
        super();
    }

    markAsDone(todo: Todo): void {
        this.update(todo.id, (entity) => ({
            ...entity,
            done: true,
        }));
    }

    markAsUndone(todo: Todo): void {
        this.update(todo.id, (entity) => ({
            ...entity,
            done: false,
        }));
    }
}
