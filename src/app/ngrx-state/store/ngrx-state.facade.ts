import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Todo } from 'src/app/types/todo';
import { NgrxStateStoreModule } from './ngrx-state-store.module';
import { addTodo, removeTodo, updateTodo } from './ngrx-state.actions';
import { State } from './ngrx-state.reducer';
import * as NgrxStateSelectors from './ngrx-state.selector';

@Injectable({ providedIn: NgrxStateStoreModule })
export class NgrxStateFacade {
    todos$ = this.store.pipe(select(NgrxStateSelectors.selectAllTodos));

    constructor(private readonly store: Store<State>) {}

    add(todo: Todo): void {
        this.store.dispatch(addTodo({ todo }));
    }

    remove(todo: Todo): void {
        this.store.dispatch(removeTodo({ id: todo.id }));
    }

    markAsDone(todo: Todo): void {
        this.store.dispatch(
            updateTodo({ todo: { id: todo.id, changes: { done: true } } })
        );
    }

    markAsUndone(todo: Todo): void {
        this.store.dispatch(
            updateTodo({ todo: { id: todo.id, changes: { done: false } } })
        );
    }
}
