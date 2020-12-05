import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../types/todo';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class RxjsStateService {
    private _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([
        {
            id: uuid(),
            title: 'あ',
            done: true,
        },
        {
            id: uuid(),
            title: 'い',
            done: false,
        },
    ]);
    todos$: Observable<Todo[]> = this._todos$.asObservable();

    constructor() {}

    add(todo: Todo): void {
        const current = this._todos$.getValue();
        this._todos$.next([...current, todo]);
    }

    remove(todo: Todo): void {
        const current = this._todos$.getValue();
        const removed = current.filter((o) => o.id !== todo.id);
        this._todos$.next(removed);
    }

    markAsDone(todo: Todo): void {
        const current = this._todos$.getValue();
        const index = current.findIndex((o) => o.id === todo.id);
        current[index].done = true;
        this._todos$.next([...current]);
    }

    markAsUndone(todo: Todo): void {
        const current = this._todos$.getValue();
        const index = current.findIndex((o) => o.id === todo.id);
        current[index].done = false;
        this._todos$.next([...current]);
    }
}
