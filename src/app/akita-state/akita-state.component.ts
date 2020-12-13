import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { stateful } from '@rx-angular/state';
import { combineLatest, Subscription } from 'rxjs';
import { delay, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { Todo } from '../types/todo';
import {
    AkitaStateComponentQuery,
    AkitaStateComponentStore,
} from './component-store/akita-state.state';
import { AkitaStateQuery } from './store/akita-state.query';
import { AkitaStateStore } from './store/akita-state.store';

@Component({
    selector: 'app-akita-state',
    templateUrl: './akita-state.component.html',
    styleUrls: ['./akita-state.component.scss'],
    providers: [AkitaStateComponentStore, AkitaStateComponentQuery],
})
export class AkitaStateComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    set subscription(sub: Subscription) {
        this._subscription.add(sub);
    }

    list$ = this.componentQuery.list$;

    form = this.fb.group({
        title: [''],
    });

    constructor(
        private readonly fb: FormBuilder,
        private readonly store: AkitaStateStore,
        private readonly query: AkitaStateQuery,
        private readonly componentStore: AkitaStateComponentStore,
        private readonly componentQuery: AkitaStateComponentQuery
    ) {}

    ngOnInit(): void {
        this.subscription = combineLatest([
            this.query.todos$,
            this.componentQuery.onlyViewNotDone$,
        ])
            .pipe(
                delay(0),
                tap(([todos, onlyViewNotDone]) => {
                    if (onlyViewNotDone) {
                        this.componentStore.update({
                            list: todos.filter((o) => !o.done),
                        });
                    } else {
                        this.componentStore.update({
                            list: todos,
                        });
                    }
                })
            )
            .subscribe();
    }

    onClickAdd(): void {
        this.store.add({
            id: uuid(),
            title: this.form.get('title').value,
            done: false,
        });
        this.form.reset({
            title: '',
        });
    }

    onClickRemove(todo: Todo): void {
        this.store.remove(todo.id);
    }

    onClickMarkAsDone(todo: Todo): void {
        this.store.markAsDone(todo);
    }

    onClickMarkAsUndone(todo: Todo): void {
        this.store.markAsUndone(todo);
    }

    onChangeOnlyViewNotDone(bool: boolean): void {
        this.componentStore.setOnlyViewNotDone(bool);
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
