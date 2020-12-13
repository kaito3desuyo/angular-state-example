import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RxState } from '@rx-angular/state';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../types/todo';
import {
    GLOBAL_RX_STATE,
    RxAngularGlobalState,
} from './store/rx-angular-state.state';
import { v4 as uuid } from 'uuid';

interface State {
    list: Todo[];
    onlyViewNotDone: boolean;
}

@Component({
    selector: 'app-rx-angular-state',
    templateUrl: './rx-angular-state.component.html',
    styleUrls: ['./rx-angular-state.component.scss'],
    providers: [RxState],
})
export class RxAngularStateComponent implements OnInit {
    readonly list$ = this.state.select('list');
    readonly onlyViewNotDone$ = this.state.select('onlyViewNotDone');

    form = this.fb.group({
        title: [''],
    });

    constructor(
        private readonly fb: FormBuilder,
        @Inject(GLOBAL_RX_STATE)
        private readonly globalState: RxState<RxAngularGlobalState>,
        private readonly state: RxState<State>
    ) {
        this.state.set({
            list: [],
            onlyViewNotDone: false,
        });

        this.state.connect(
            'list',
            combineLatest([
                this.globalState.select('todos'),
                this.onlyViewNotDone$,
            ]).pipe(
                map(([todos, onlyViewNotDone]) => {
                    if (onlyViewNotDone) {
                        return todos.filter((o) => !o.done);
                    } else {
                        return todos;
                    }
                })
            )
        );
    }

    ngOnInit(): void {}

    onClickAdd(): void {
        const current = this.globalState.get('todos') ?? [];
        this.globalState.set({
            todos: [
                ...current,
                {
                    id: uuid(),
                    title: this.form.get('title').value,
                    done: false,
                },
            ],
        });
        this.form.reset({
            title: '',
        });
    }

    onClickRemove(todo: Todo): void {
        this.globalState.set({
            todos: [
                ...this.globalState
                    .get('todos')
                    .filter((o) => o.id !== todo.id),
            ],
        });
    }

    onClickMarkAsDone(todo: Todo): void {
        const current = this.globalState.get('todos') ?? [];
        const index = current.findIndex((o) => o.id === todo.id);
        current[index].done = true;
        this.globalState.set({
            todos: [...current],
        });
    }

    onClickMarkAsUndone(todo: Todo): void {
        const current = this.globalState.get('todos') ?? [];
        const index = current.findIndex((o) => o.id === todo.id);
        current[index].done = false;
        this.globalState.set({
            todos: [...current],
        });
    }

    onChangeOnlyViewNotDone(bool: boolean): void {
        this.state.set({ onlyViewNotDone: bool });
    }
}
