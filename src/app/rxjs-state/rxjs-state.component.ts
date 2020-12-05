import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RxjsStateComponentService } from './rxjs-state-component.service';
import { RxjsStateService } from './rxjs-state.service';
import { v4 as uuid } from 'uuid';
import { Todo } from '../types/todo';

@Component({
    selector: 'app-rxjs-state',
    templateUrl: './rxjs-state.component.html',
    styleUrls: ['./rxjs-state.component.scss'],
    providers: [RxjsStateComponentService],
})
export class RxjsStateComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    set subscription(sub: Subscription) {
        this._subscription.add(sub);
    }

    form = this.fb.group({
        title: [''],
    });

    list$ = this.rxjsStateComponentService.list$;

    constructor(
        private readonly fb: FormBuilder,
        private readonly rxjsStateService: RxjsStateService,
        private readonly rxjsStateComponentService: RxjsStateComponentService
    ) {}

    ngOnInit(): void {
        this.subscription = combineLatest([
            this.rxjsStateService.todos$,
            this.rxjsStateComponentService.onlyViewNotDone$,
        ])
            .pipe(
                tap(([todos, onlyViewNotDone]) => {
                    if (onlyViewNotDone) {
                        this.rxjsStateComponentService.list = todos.filter(
                            (o) => !o.done
                        );
                    } else {
                        this.rxjsStateComponentService.list = todos;
                    }
                })
            )
            .subscribe();
    }

    onClickAdd(): void {
        this.rxjsStateService.add({
            id: uuid(),
            title: this.form.get('title').value,
            done: false,
        });
        this.form.reset({
            title: '',
        });
    }

    onClickRemove(todo: Todo): void {
        this.rxjsStateService.remove(todo);
    }

    onClickMarkAsDone(todo: Todo): void {
        this.rxjsStateService.markAsDone(todo);
    }

    onClickMarkAsUndone(todo: Todo): void {
        this.rxjsStateService.markAsUndone(todo);
    }

    onChangeOnlyViewNotDone(bool: boolean): void {
        this.rxjsStateComponentService.onlyViewNotDone = bool;
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
