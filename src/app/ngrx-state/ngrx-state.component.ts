import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgrxStateFacade } from './store/ngrx-state.facade';
import { v4 as uuid } from 'uuid';
import { Todo } from '../types/todo';
import { NgrxStateComponentStore } from './component-store/ngrx-state.component-store';
import { combineLatest, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-ngrx-state',
    templateUrl: './ngrx-state.component.html',
    styleUrls: ['./ngrx-state.component.scss'],
    providers: [NgrxStateComponentStore],
})
export class NgrxStateComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    set subscription(sub: Subscription) {
        this._subscription.add(sub);
    }

    list$ = this.ngrxStateComponentStore.list$;

    form = this.fb.group({
        title: [''],
    });

    constructor(
        private readonly fb: FormBuilder,
        private readonly ngrxStateService: NgrxStateFacade,
        private readonly ngrxStateComponentStore: NgrxStateComponentStore
    ) {}

    ngOnInit(): void {
        this.subscription = combineLatest([
            this.ngrxStateService.todos$,
            this.ngrxStateComponentStore.onlyViewNotDone$,
        ])
            .pipe(
                tap(([todos, onlyViewNotDone]) => {
                    if (onlyViewNotDone) {
                        this.ngrxStateComponentStore.setList(
                            todos.filter((o) => !o.done)
                        );
                    } else {
                        this.ngrxStateComponentStore.setList(todos);
                    }
                })
            )
            .subscribe();
    }

    onClickAdd(): void {
        this.ngrxStateService.add({
            id: uuid(),
            title: this.form.get('title').value,
            done: false,
        });
        this.form.reset({
            title: '',
        });
    }

    onClickRemove(todo: Todo): void {
        this.ngrxStateService.remove(todo);
    }

    onClickMarkAsDone(todo: Todo): void {
        this.ngrxStateService.markAsDone(todo);
    }

    onClickMarkAsUndone(todo: Todo): void {
        this.ngrxStateService.markAsUndone(todo);
    }

    onChangeOnlyViewNotDone(bool: boolean): void {
        this.ngrxStateComponentStore.setOnlyViewNotDone(bool);
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
